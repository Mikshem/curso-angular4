import { Injectable } from '@angular/core';

@Injectable()
export class RopaService{
   // public nombre_prenda = 'Pantalones jeans';
    public coleccion_ropa = ['Pantalones Blancos', 'Camisa roja', 'medias'];

    addRopa(nombre_prenda:string):Array<string>{
        if(nombre_prenda){
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
        }
    }

    getRopa(){
        return this.coleccion_ropa;
    }
    deleteRopa(index:number){
        this.coleccion_ropa.splice(index,1);
        return this.getRopa();
    }
}