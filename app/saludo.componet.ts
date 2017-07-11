import {Component} from '@angular/core';

@Component({
  selector:'saludo',
  template:`<h1>Hola {{name}}</h1>`
})
export class SaludoComponent{
  name: string = "Misko Hevey"
}
