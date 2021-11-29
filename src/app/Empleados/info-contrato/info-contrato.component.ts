import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-info-contrato',
  templateUrl: './info-contrato.component.html',
  styleUrls: ['./info-contrato.component.css']
})
export class InfoContratoComponent implements OnInit {

  contratoForm: FormGroup = new FormGroup({});
  idEmpleado:string = "";
  constructor(
    private _empleadosService: EmpleadosService,
  ) { }

  ngOnInit(): void {
  }

  crearContrato(){
    this._empleadosService.crearContrato(this.contratoForm.value, this.idEmpleado).then(result => {
      // Re-enable el form
      this.contratoForm.enable();

      // Reset el form
      this.contratoForm.reset();

    })
  }

}
