import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-list-destinos',
  templateUrl: './list-destinos.component.html',
  styleUrls: ['./list-destinos.component.css']
})
export class ListDestinosComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  destinos: DestinoViaje[];

  constructor() {
    this.destinos = [];
    this.onItemAdded = new EventEmitter();
  }
  ngOnInit(): void {
  }

  agregado(d: DestinoViaje):boolean{
    this.destinos.push(d);
    this.onItemAdded.emit(d);
    return false;
  }

  elegido(destino: DestinoViaje){
    this.destinos.forEach(function(x) {
      x.setSelected(false);
    });

    destino.setSelected(true);
  }

}
