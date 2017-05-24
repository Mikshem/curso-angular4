import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class EmpleadoComponent{
    public titulo= 'Listado de empleados';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    constructor(){
         this.empleado= new Empleado('Micael Vaca', 27, 'Programador', true);
         this.trabajadores = [
             new Empleado('Magaly Chambi', 30, 'Contadora', true),
             new Empleado('Micael Vaca', 27, 'Programador', true),
             new Empleado('Emanuel', 33, 'SEO', false)
            ];
             this.trabajador_externo = true; 
    }
       

    ngOnInit(){
       
        console.log(this.empleado);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }
}