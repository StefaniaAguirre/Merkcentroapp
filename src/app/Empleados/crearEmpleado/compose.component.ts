import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpleadosService } from '../empleados.service';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})



export class ComposeComponent implements OnInit {

  animal: string = "";
  name: string = "";
  EmpleadoForm: FormGroup = new FormGroup({});
 


  constructor(
    private _formBuilder: FormBuilder,
    private _empleadosService: EmpleadosService,
  ) { }

  ngOnInit(): void {

    // Crear el form de empleado
    this.EmpleadoForm = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      barrio: ['', Validators.required],
      cargo: ['', Validators.required],
      edad: ['', Validators.required],
      id: [''],
      identificacion: ['', Validators.required],
      telefono: ['', Validators.required],
      activo: [''],
      direccion: ['', Validators.required]

    });

  }

  crearUsuario(): void {
    // disable the form 
    this.EmpleadoForm.disable();
    console.log("Ingresó")
    console.log(this.EmpleadoForm.value)
    this._empleadosService.crearEmpleado(this.EmpleadoForm.value).then(result => {
      // Re-enable el form
      this.EmpleadoForm.enable();

      // Reset el form
      this.EmpleadoForm.reset();

    })

  }


  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

}
