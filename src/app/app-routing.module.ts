import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DashboardComponent} from './vistas/dashboard/dashboard.component'
import { AppComponent } from './app.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
{ path:'dashboard', component:DashboardComponent},
{ path:'editar', component:EditarComponent},
{ path:'nuevo', component:NuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[DashboardComponent,EditarComponent,NuevoComponent]
