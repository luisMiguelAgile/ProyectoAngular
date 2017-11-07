import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  lugares:any =  [
  	{active: true, nombre: 'Floresteria G'},
  	{active: true,nombre: 'Donas la pas'},
  	{active: false, nombre: 'Veterinaria hF'}
  ];

  lat:number = 5.4600252;
  lng:number = -74.342902;

  constructor(){
  	
  }
}
