import { Injectable } from '@angular/core';
import { horario } from './horarios.type';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, of,throwError } from 'rxjs';
import { map, switchMap, tap, take } from 'rxjs/operators';
import { __values } from 'tslib';
import { cloneDeep, result } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  private _horarios:BehaviorSubject<horario[]> = new BehaviorSubject<horario[]>([]);
  private _horario: BehaviorSubject<horario | null> = new BehaviorSubject<horario | null>(null);
  private _horarioById:BehaviorSubject<horario[] | null> = new BehaviorSubject<horario[] | null>(null);

  constructor(private db: AngularFirestore) { }



 /**
   * 
   * @param horariosForm 
   * @param addEvento 
   * @returns 
   */
  crearEvento(horariosForm: any): Promise<any> {
    
    var horaEntrada: string = horariosForm.horaEntrada;
    var horaSalida: string = horariosForm.horaSalida;
    var empleado: string = horariosForm.empleado;
    var mensaje: string = horariosForm.mensaje;
  
    




    console.log(horaEntrada, horaSalida, empleado, mensaje)
    return this.db.collection('horarios').add({ horaEntrada, horaSalida, empleado, mensaje}).then(results => {

      console.log(results);
    });
  }










}
