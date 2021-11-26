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
import { ProfilesComponent } from './profiles/profiles.component';
import { ComposeComponent } from './Empleados/crearEmpleado/compose.component';
import { EmpleadosService } from './Empleados/empleados.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';



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
    ProfilesComponent,
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    // 3. Initialize
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    NgxPaginationModule,
    MatPaginatorModule,
    FormsModule, 
    ReactiveFormsModule
    // MatFormFieldModule,
    // Input
    // RouterModule.forRoot(appRoutes, routerConfig),

  ],
  providers: [EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
