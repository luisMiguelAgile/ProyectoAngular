import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  lugares: any = [
    { plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre: 'Floresteria G' },
    { plan: 'pagado', cercania: 2, distancia: 2, active: true, nombre: 'Donas la pas' },
    { plan: 'gratuito', cercania: 3, distancia: 3, active: false, nombre: 'Veterinaria hF' }
  ];

  lat: number = 5.4600252;
  lng: number = -74.342902;

  constructor() {

  }
}
