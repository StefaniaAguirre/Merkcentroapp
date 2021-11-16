import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComposeComponent } from '../crearEmpleado/compose.component';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  listEmpleados: any[] = [];

  constructor(
  ) { }

  ngOnInit(): void {

    this.listEmpleados = [
      { name: "camilo", id: "099", email: "camilo@gmail.com", telefono: 3137838043 },
      { name: "Juan", id: "098", email: "Juan@gmail.com", telefono: 3130988043 },
      { name: "Pedro", id: "097", email: "Pedro@gmail.com", telefono: 3154137899 }];
  }

  
}



