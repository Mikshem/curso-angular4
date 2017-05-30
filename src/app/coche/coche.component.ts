import { Component, OnInit } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'coche',
  templateUrl: './coche.component.html'
})

export class CocheComponent{
  public coche: Coche;

  constructor() { 
    this.coche = new Coche("", "", "");
  }

  onSubmit(){
    console.log(this.coche);
  }
}
