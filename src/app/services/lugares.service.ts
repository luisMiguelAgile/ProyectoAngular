import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class LugaresService {
    lugares: any = [
        { id: 1, plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre: 'Floresteria G' },
        { id: 2, plan: 'pagado', cercania: 2, distancia: 2, active: true, nombre: 'Donas la pas' },
        { id: 3, plan: 'gratuito', cercania: 3, distancia: 3, active: false, nombre: 'Veterinaria hF' },
         { id: 4, plan: 'gratuito', cercania: 3, distancia: 3, active: false, nombre: 'restaurante ll' }
    ];
    constructor(private afDB: AngularFireDatabase) {
        
    }

    public getLugares(){
        return this.lugares;
    }
   public buscarLugar(id) {
        return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null;
    }
    public guardarLugar(lugar){
        console.log(lugar);
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);

    }
}