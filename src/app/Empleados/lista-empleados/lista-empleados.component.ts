import { ChangeDetectorRef, Component, EventEmitter, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComposeComponent } from '../crearEmpleado/compose.component';
import { EmpleadosService } from '../empleados.service';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { empleado } from '../empleados.types';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  listEmpleados: empleado[] = [];
  empleadoSeleccionado: empleado | null = null;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  empleados$: Observable<empleado[]> = new Observable<empleado[]>();
  public page: number = 0;
  searchInputControl: FormControl = new FormControl();

  constructor(
    private _empleadosService: EmpleadosService,
    private _changeDetectorRef: ChangeDetectorRef,

  ) {

  }

  ngOnInit(): void {

    this.empleados$ = this._empleadosService.empleados$;

    //Empleado seleccionado
    this._empleadosService.empleado$.subscribe(result => this.empleadoSeleccionado = result);

     // Get the user
     this._empleadosService.empleado$
     .pipe(takeUntil(this._unsubscribeAll))
     .subscribe((result: empleado | null) => {

         // Update the selected user
         this.empleadoSeleccionado = result;
         // Mark for check
         this._changeDetectorRef.markForCheck();
     });
    
     // Get the empleados
    this._empleadosService.getEmpleados().pipe(takeUntil(this._unsubscribeAll)).subscribe(results => {
      this.listEmpleados = results;
    });

    this.searchInputControl.valueChanges.pipe( 
      takeUntil(this._unsubscribeAll), 
      switchMap(query => this._empleadosService.searchEmpleados(query))        
      ).subscribe();
    
  }

  buscarEmpleado(){

    this.listEmpleados = [];
    
    this._empleadosService.searchEmpleados(this.searchInputControl.value).pipe(takeUntil(this._unsubscribeAll)).subscribe(results => {
      this.listEmpleados = results;
      this._changeDetectorRef.markForCheck();
    });
  }




}
