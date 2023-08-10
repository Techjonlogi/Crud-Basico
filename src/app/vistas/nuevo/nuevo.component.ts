import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {ApiService} from "../../servicios/api/api.service"
import { ProductoI } from 'src/app/Modelos/Producto.interface';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {



  nuevoProductoForm=new FormGroup({
    IDProducto:new FormControl('',Validators.required),
    Nombre: new FormControl('',Validators.required),
    Tipo: new FormControl('',Validators.required),
    Marca: new FormControl('',Validators.required),
    Estado: new FormControl('',Validators.required)

  });
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService){

  }

  ngOnInit():void{

  }

  onSave(id,nombre,tipo,marca,estado){

    let productoEnviar: ProductoI = {
      IDProducto : id,
       Nombre: nombre,
      Tipo : tipo,
      Marca : marca,
      Estado: estado
  };
  this.api.postProducto(productoEnviar).subscribe(data=>{
    console.log(data);

  });

  }

}
