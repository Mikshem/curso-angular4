import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

 @Component({
     selector:'contact',
     templateUrl: './contact.component.html'

 })

 export class ContactComponent{
     public titulo2 = 'Pagina de Contacto...';
     public parametro;

     constructor(
         private _route: ActivatedRoute,
         private _router:Router
     ){}

     ngOnInit(){
         this._route.params.forEach((params:Params)=>{

            this.parametro = params['page'];

         });
    }

    redirigir(){
        this._router.navigate(['/contact', 'mikshem.vb7.com']);
    }
 }