import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//Importat Componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes= [
  { path:'', component:HomeComponent},
  { path:'pagina-principal', component:HomeComponent},
  { path:'empleado', component: EmpleadoComponent},
  { path:'contact', component: ContactComponent},
  { path:'**', component: EmpleadoComponent}  
];

export const appRoutingProviders: any[]=[];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);