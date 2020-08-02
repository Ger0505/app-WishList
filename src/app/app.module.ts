import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListDestinosComponent } from './list-destinos/list-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { DestinosApiClient } from "./models/destinos-api-client.model";
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ListDestinosComponent},
  {path: 'destino', component: DestinoDetalleComponent},
  {path: 'destino/:id', component: DestinoDetalleComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    DestinoViajeComponent,
    ListDestinosComponent,
    DestinoDetalleComponent,
    FormDestinoViajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
      DestinosApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
