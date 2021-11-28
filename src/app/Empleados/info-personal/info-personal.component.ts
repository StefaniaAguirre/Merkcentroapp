import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  empleado: empleado = {id:"",
    activo: true, apellidos: "",
    barrio: "", cargo: "",
    direccion: "", edad: 0,
    identificacion: "", nombre: "", telefono: "" }
  empleadoSeleccionado: empleado | null  = this.empleado;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  empleados$: Observable<empleado[]> = new Observable<empleado[]>();
  public page: number = 0;
  searchInputControl: FormControl = new FormControl();

  constructor(
    private _empleadosService: EmpleadosService,
    private _changeDetectorRef: ChangeDetectorRef,
    public router:ActivatedRoute
  ) {

  }

  ngOnInit(): void {

    //obtener el empleado seleccionado
    this._empleadosService.empleado$.pipe(takeUntil(this._unsubscribeAll)).subscribe(result => this.empleadoSeleccionado = result);
    var id: string = this.router.snapshot.paramMap.get('id') + "";
    
    // obtener la información del empleado
     this._empleadosService.getEmpleadoById(id)
     .pipe(takeUntil(this._unsubscribeAll))
     .subscribe((result: empleado) => {

         // Update the selected order
         this.empleadoSeleccionado = result;
          console.log(result);
         //Load the order products
        //  this._empleadosService.getContrato(this.empleadoSeleccionado.id).subscribe(result => this.contrato = result);

         // Mark for check
         this._changeDetectorRef.markForCheck();
     });






  }

}
