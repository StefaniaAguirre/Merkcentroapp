import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';
import { EmpleadosService } from '../empleados.service';
import { empleado } from '../empleados.types';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.css']
})
export class InfoPersonalComponent implements OnInit {

  empleado: empleado = {
    id: "",
    activo: true, apellidos: "",
    barrio: "", cargo: "",
    direccion: "", edad: 0,
    identificacion: "", nombre: "", telefono: ""
  }
  empleadoSeleccionado: empleado | null = this.empleado;
  EmpleadoForm: FormGroup = new FormGroup({});
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  empleados$: Observable<empleado[]> = new Observable<empleado[]>();
  public page: number = 0;
  searchInputControl: FormControl = new FormControl();
  id:string="";

  constructor(
    private _empleadosService: EmpleadosService,
    private _changeDetectorRef: ChangeDetectorRef,
    public router: ActivatedRoute,
    private _formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {

    //obtener el empleado seleccionado
    this._empleadosService.empleado$.pipe(takeUntil(this._unsubscribeAll)).subscribe(result => this.empleadoSeleccionado = result);
    this.id = this.router.snapshot.paramMap.get('id') + "";

    // obtener la información del empleado
    this._empleadosService.getEmpleadoById(this.id)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((result: empleado) => {

        // Update the selected order
        this.empleadoSeleccionado = result;
        console.log(result);
        this._changeDetectorRef.markForCheck();
      });

    // Crear el form de empleado
    this.EmpleadoForm = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      barrio: ['', Validators.required],
      cargo: ['', Validators.required],
      edad: ['', Validators.required],
      id: ['', Validators.required],
      identificacion: ['', Validators.required],
      telefono: ['', Validators.required],
      activo: ['', Validators.required],
      direccion: ['', Validators.required]

    });

  }

  editarEmpleado(){

    //llamado a empleado service para Actualizar Empleado
    this._empleadosService.actualizarEmpleado(this.id, this.EmpleadoForm.value).pipe(takeUntil(this._unsubscribeAll))
      .subscribe(results => { 
        this.EmpleadoForm.enable();
        console.log(results) });
  }

  eliminarEmpleado(){

    //llamado a empleado service para eliminar
    this._empleadosService.eliminarEmpleado(this.id)
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(()=> {            
        this._changeDetectorRef.markForCheck();
    });

  }

}
