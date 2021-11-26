import { FormControl } from "@angular/forms";

export interface empleado
{
    id:string;
    activo: boolean;
    apellidos: string;
    barrio: string;
    cargo: string;
    direccion: string;
    edad: number;
    identificacion: string;
    nombre: string;
    telefono: string;
}

export interface contrato
{
    fechaI: string;
    fechaF:string;
    imagen:string;
}