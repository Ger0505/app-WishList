import { DestinoViaje } from './destino-viaje.model';
import { Subject, BehaviorSubject } from "rxjs";
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { NuevoDestinoAction, ElegidoFavoritoAction } from "./../models/destinos-viajes-state.model";
import { Injectable } from '@angular/core';

@Injectable()
export class DestinosApiClient {
  constructor(private store:Store<AppState>) {
  }

  add(d:DestinoViaje){
    this.store.dispatch(new NuevoDestinoAction(d));
  }

  elegir(d: DestinoViaje){
    this.store.dispatch(new ElegidoFavoritoAction(d));
  }
}

// export class DestinosApiClient {
//   destinos:DestinoViaje[];
//   current: Subject<DestinoViaje> = new BehaviorSubject(null);

//   constructor() {
//     this.destinos = [];
//   }
//   add(d:DestinoViaje){
//     this.destinos.push(d);
//   }
//   getAll(): DestinoViaje[] {
//     return this.destinos;
//   }
//   getById(id: String): DestinoViaje {
//     return this.destinos.filter(function(d){ return d.id.toString() === id; })[0];
//   }

//   elegir(d: DestinoViaje){
//     this.destinos.forEach(x => x.setSelected(false));
//     d.setSelected(true);
//     this.current.next(d);
//   }

//   subscribeOnChange(fn){
//     this.current.subscribe(fn);
//   }
// }