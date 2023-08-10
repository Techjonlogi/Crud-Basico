import { Component } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service'
import{Router} from '@angular/router'
import {ProductoI} from '../../Modelos/Producto.interface'
import{Tipoi} from '../../Modelos/Tipo.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  productos:ProductoI[];
  tipos:Tipoi[];
  constructor(private api:ApiService, private router:Router){}
    
  ngOnInit(): void{
    this.api.getProductos().subscribe(data=>(
      this.productos=data
    ))
    this.api.getTipos().subscribe(data=>(
      this.tipos=data
    ))
  }

  editarProducto(id:number){
    this.router.navigate(['editar',id]);
  }

  nuevoProducto(){
    this.router.navigate(['nuevo']);
  }
}
