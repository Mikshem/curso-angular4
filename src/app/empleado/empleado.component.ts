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
    public color:string;
    public color_seleccionado:string;

    constructor(){
         this.empleado= new Empleado('Micael Vaca', 27, 'Programador', true);
         this.trabajadores = [
             new Empleado('Magaly Chambi', 30, 'Contadora', false),
             new Empleado('Micael Vaca', 27, 'Programador', true),
             new Empleado('Emanuel', 33, 'SEO', false)
            ];
             this.trabajador_externo = true;
             this.color= 'red';
             this.color_seleccionado = 'red';
    }
       

    ngOnInit(){
       
        console.log(this.empleado);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

    mostrar_log(){
        console.log(this.color_seleccionado);
    }
}