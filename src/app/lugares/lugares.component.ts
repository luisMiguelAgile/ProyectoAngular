import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']

})
export class LugaresComponent {
  title = 'platzisquare';


  lat: number = 5.4600252;
  lng: number = -74.342902;
  lugares = null;
  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares()
      .valueChanges().subscribe(lugares => {
        console.log(lugares)
        this.lugares = lugares;
      })

  }


}
