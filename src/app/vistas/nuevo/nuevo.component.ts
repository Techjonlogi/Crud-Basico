import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
import {ApiService} from "../../servicios/api/api.service"
import { ProductoI } from 'src/app/Modelos/Producto.interface';
import {Router, ActivatedRoute } from '@angular/router';
import {AlertasService} from "../../servicios/alertas/alertas.service"
import { ProductoGuardarI } from 'src/app/Modelos/Producto.Guardari.nterface';

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
  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService,private alerta:AlertasService){

  }

  ngOnInit():void{

  }

  onSave(nombre,tipo,marca){

    let productoEnviar: ProductoGuardarI = {
       Nombre: nombre,
      Tipo : tipo,
      Marca : marca
  };
  this.api.postProducto(productoEnviar).subscribe(data=>{
    let respuesta:ProductoGuardarI = data;
    if(respuesta===null){
      this.alerta.showError('No se pudo Guardar','Error al guardar');
    }else{
      this.alerta.showSucces('Se guardó correctamente','Correcto');
      this.router.navigate(['dashboard']);

    }

  });

  }



  salir(){
    this.router.navigate(['dashboard']);
  
  }
  

}
