import { Injectable } from '@angular/core';
import { empleado } from './empleados.types';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, tap, take } from 'rxjs/operators';
import { __values } from 'tslib';
import { cloneDeep, result } from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private _empleados: BehaviorSubject<empleado[]> = new BehaviorSubject<empleado[]>([]);
  private _empleado: BehaviorSubject<empleado | null > = new BehaviorSubject<empleado | null >(null);

  constructor(private db: AngularFirestore) {
    
  }
  

  /**
   * 
   * @param empleadoForm 
   * @param addEmpleado 
   * @returns 
   */
  crearEmpleado(empleadoForm: any): Promise<any> {
    var nombre: string = empleadoForm.nombre;
    var apellidos: string = empleadoForm.apellidos;
    var barrio: string = empleadoForm.barrio;
    var edad: number = empleadoForm.edad;
    var cargo: string = empleadoForm.cargo;
    var direccion: string = empleadoForm.direccion;
    var identificacion: string = empleadoForm.identificacion;
    var telefono: string = empleadoForm.telefono;
    var activo: boolean = true;
    console.log(nombre, apellidos, barrio, edad, cargo, direccion, identificacion, telefono, activo)
    return this.db.collection('empleados').add({ nombre, apellidos, barrio, edad, cargo, direccion, identificacion, telefono, activo }).then(results => {
  
      console.log(results);
    });
  }

  /**
   * Obtener los empleados
   */
  get empleados$(): Observable<empleado[]> {
    return this._empleados.asObservable();
  }
  /**
   * Obtiene el empleado seleccionado
   */
  get empleado$(): Observable<empleado | null> {
    return this._empleado.asObservable();
  }


  /**
   * obtener los empleados de la base de datos
   */
  getEmpleados(): Observable<empleado[]> {
    return this.db.collection<empleado>('empleados').snapshotChanges().pipe(
      map(actions => {
        //Add the supplier id
        return actions.map(a => {
          const data: empleado = a.payload.doc.data();
          data.id = a.payload.doc.id;
          return data;
        });
      }),
      tap((empleados) => {
        //Sort the orders by date
        empleados.sort((a, b) => a.id.localeCompare(b.id));
        this._empleados.next(empleados);
      })
    );
  }

  /**
  * actualizar Empleado
  * @param idEmpleado 
  */
  actualizarEmpleado(idEmpleado: string) {

    // llamado a la base de datos para actualizar cualquier propiedad del empleado
    var userRefStock = this.db.collection("empleados").doc(idEmpleado);
    userRefStock.update({


    });

  }

  /**
     * buscar empleados por medio del query
     *
     * @param query
     */
   searchEmpleados(query: string): Observable<empleado[]>
   {
     console.log("query", query);
       // Clone the products
       let empleados: empleado[];
       return this.getEmpleados().pipe(
           switchMap((results:empleado[]) => {
              empleados = cloneDeep(results);
               // Filter the products
               empleados = empleados.filter(empleado => 
                empleado.nombre && empleado.nombre.toLowerCase().includes(query.toLowerCase())  || 
                empleado.barrio && empleado.barrio.toLowerCase().includes(query.toLowerCase()) || 
                empleado.identificacion && empleado.identificacion.toLowerCase().includes(query.toLowerCase()) ||
                empleado.cargo && empleado.cargo.toLowerCase().includes(query.toLowerCase()) ||
                empleado.telefono && empleado.telefono.toLowerCase().includes(query.toLowerCase())
              
               );
               // Sort the products by the name field by default
               empleados.sort((a, b) => a.nombre.localeCompare(b.nombre));
               this._empleados.next(empleados);
                console.log("resultado:", empleados)
               return of(empleados);
           })
       );
   }
}
