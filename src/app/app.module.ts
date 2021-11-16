import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './Empleados/lista-empleados/lista-empleados.component';
import { InfoPersonalComponent } from './Empleados/info-personal/info-personal.component';
import { InfoPermisosComponent } from './Empleados/info-permisos/info-permisos.component';
import { InfoContratoComponent } from './Empleados/info-contrato/info-contrato.component';
import { HorariosComponent } from './horarios/horarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DiariosComponent } from './diarios/diarios.component';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ComposeComponent } from './Empleados/crearEmpleado/compose.component';
// import { MatFormFieldModule } from '@angular/material/form-field';

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  preloadingStrategy       : PreloadAllModules
};

@NgModule({
  declarations: [
    AppComponent,
    // ProfilesComponent,
    ListaEmpleadosComponent,
    InfoPersonalComponent,
    InfoPermisosComponent,
    InfoContratoComponent,
    HorariosComponent,
    PerfilComponent,
    LoginComponent,
    DiariosComponent,
    ComposeComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    // MatFormFieldModule,
    // Input
    // RouterModule.forRoot(appRoutes, routerConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
