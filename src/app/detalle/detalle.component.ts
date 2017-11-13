import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {

  lugares: any = [
    { id: 1, plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre: 'Floresteria G', description: 'La mejor floristeri' },
    { id: 2, plan: 'pagado', cercania: 2, distancia: 2, active: true, nombre: 'Donas la pas', description: 'La super dona' },
    { id: 3, plan: 'gratuito', cercania: 3, distancia: 3, active: false, nombre: 'Veterinaria hF', description: 'El sana animales' }
  ];
  id = null;
  lugar : any = {};
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.queryParams);
    this.id = this.route.snapshot.params['id'];
    console.log(this.buscarLugar());
    this.lugar = this.buscarLugar();
  }
  buscarLugar() {
    return this.lugares.filter((lugar) => { return lugar.id == this.id })[0] || null;
  }

}
