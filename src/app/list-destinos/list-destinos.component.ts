import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-list-destinos',
  templateUrl: './list-destinos.component.html',
  styleUrls: ['./list-destinos.component.css']
})
export class ListDestinosComponent implements OnInit {
  destinos: DestinoViaje[];

  constructor() {
    this.destinos = [];
  }
  ngOnInit(): void {
  }

  guardar(nombre:string, url:string):boolean{
    this.destinos.push(new DestinoViaje(nombre,url));
    return false;
  }

}
