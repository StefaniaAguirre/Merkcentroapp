import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeComponent } from './Empleados/crearEmpleado/compose.component';
import { InfoContratoComponent } from './Empleados/info-contrato/info-contrato.component';
import { InfoPermisosComponent } from './Empleados/info-permisos/info-permisos.component';
import { InfoPersonalComponent } from './Empleados/info-personal/info-personal.component';
import { ListaEmpleadosComponent } from './Empleados/lista-empleados/lista-empleados.component';
import { HorariosComponent } from './horarios/horarios.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DiariosComponent } from './diarios/diarios.component';

const routes: Routes = [
      // //ruta inicial a login
      { path : '', pathMatch: 'full', redirectTo : 'login'},
      { path: 'login', component: LoginComponent },
      { path: 'perfil', component: PerfilComponent},
      { path: 'horarios', component: HorariosComponent},
      { path: 'empleados', component: ListaEmpleadosComponent},
      { path: 'info', component: InfoPersonalComponent},
      { path: 'permisos', component: InfoPermisosComponent},
      { path: 'contrato', component: InfoContratoComponent},
      { path: 'compose', component: ComposeComponent},
      { path:  'diarios', component: DiariosComponent},
      { path: '**', redirectTo: 'login'}
      // { path: 'empleados', component: ListaEmpleadosComponent, children: [
      //   { path: 'info', component: InfoPersonalComponent},
      //   { path: 'permisos', component: InfoPermisosComponent},
      //   { path: ':contrato', component: InfoContratoComponent}]},
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
