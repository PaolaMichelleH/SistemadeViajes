import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { AsignacionesComponent } from './pages/asignaciones/asignaciones.component';
import { ReportesComponent } from './pages/reportes/reportes.component';



const appRoutes: Routes=[
  {path:'login', component:LoginComponent},
  {path:'homepage', component:HomepageComponent},
  {path:'homepage/colaboradores', component:ColaboradoresComponent},
  {path:'homepage/sucursales',component:SucursalesComponent},
  {path:'homepage/asignaciones',component:AsignacionesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    ColaboradoresComponent,
    SucursalesComponent,
    AsignacionesComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
