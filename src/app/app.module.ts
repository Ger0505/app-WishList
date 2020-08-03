import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { StoreModule as NgRxStoreModule, ActionReducerMap } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';
import { ListDestinosComponent } from './list-destinos/list-destinos.component';
import { DestinoDetalleComponent } from './destino-detalle/destino-detalle.component';
import { DestinosApiClient } from "./models/destinos-api-client.model";
import { DestinosViajesState, reducerDestinosViajes, 
  initializeDestinosViajesStates, DestinosViajeEffects } 
from "./models/destinos-viajes-state.model";
import { FormDestinoViajeComponent } from './form-destino-viaje/form-destino-viaje.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: ListDestinosComponent},
  {path: 'destino', component: DestinoDetalleComponent},
  {path: 'destino/:id', component: DestinoDetalleComponent} 
]

// redux init
export interface AppState{
  destinos: DestinosViajesState;
}

const reducers = {
  destinos: reducerDestinosViajes
}

const reducersInitialState = {
  destinos: initializeDestinosViajesStates()
}
// end redux init 

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
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers,
      {initialState: reducersInitialState,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
      }),
    EffectsModule.forRoot([DestinosViajeEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [
      DestinosApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
