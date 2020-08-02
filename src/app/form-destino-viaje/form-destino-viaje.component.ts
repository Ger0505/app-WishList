import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;

  constructor( fb: FormBuilder) { 
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre:['',Validators.compose([
        Validators.required,
        this.nameValidator,
        this.nameParamtricValidator(10)
      ])],
      url:['']
    });

    this.fg.valueChanges.subscribe((form:any)=>{
      console.log(form);
      
    });
  }

  ngOnInit(): void {
  }

  guardar(nombre:string,url:string):boolean{
    let d = new DestinoViaje(nombre,url);
    this.onItemAdded.emit(d);
    return false;
  }

  nameValidator(control: FormControl):{[s:string]: boolean}{
    let l = control.value.toString().trim().length;
    if(l > 0 && l < 5){
      return { invalidName : true};
    }
    
    return null;
  }
  
  nameParamtricValidator(minLen: number): ValidatorFn{
    return (control: FormControl): {[s:string]:boolean} | null =>{
      let l = control.value.toString().trim().length;
      if(l > 0 && l < minLen){
        return { invalidParametricName : true};
      }
      return null;
    }
  }

}
