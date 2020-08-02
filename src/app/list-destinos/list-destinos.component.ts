import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { DestinoViaje } from './../models/destino-viaje.model';

import { DestinosApiClient } from './../models/destinos-api-client.model';

@Component({
  selector: 'app-list-destinos',
  templateUrl: './list-destinos.component.html',
  styleUrls: ['./list-destinos.component.css']
})

export class ListDestinosComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];

  constructor(public destinosApiClient: DestinosApiClient ) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.destinosApiClient.subscribeOnChange((d:DestinoViaje)=>{
      if(d != null){
        this.updates.push("Se ha elegido a " + d.nombre);
      }
    })
  }

  ngOnInit(): void {
  }

  guardar(nombre:string, url:string):boolean {
    let d = new DestinoViaje(nombre, url);
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    return false;
  }

  agregado(d: DestinoViaje) {
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);
    return false;
  }

  elegido(e: DestinoViaje){
    this.destinosApiClient.elegir(e);
  }

}