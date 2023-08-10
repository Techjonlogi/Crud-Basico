import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {ApiService} from "../../servicios/api/api.service"
import {AlertasService} from "../../servicios/alertas/alertas.service"
import { ProductoI } from 'src/app/Modelos/Producto.interface';
import{FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  datosProducto:ProductoI;



  editarForm=new FormGroup({
    IDProducto:new FormControl(''),
    Nombre: new FormControl(''),
    Tipo: new FormControl(''),
    Marca: new FormControl(''),
    Estado: new FormControl('')

  });



  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService,private alerta:AlertasService){

  }

  ngOnInit():void{
    let productoid = this.activerouter.snapshot.paramMap.get('id');
    this.api.getProducto(productoid).subscribe(data =>{
    this.datosProducto = data[0];
    this.editarForm.setValue({
      'IDProducto': this.datosProducto.IDProducto,
      'Nombre': this.datosProducto.Nombre,
      'Tipo': this.datosProducto.Tipo,
      'Marca': this.datosProducto.Marca,
      'Estado': this.datosProducto.Estado
    });
    
  })
     
    
  }

  postForm(id,nombre,tipo,marca,estado){
    let productoEnviar: ProductoI = {
      IDProducto : id,
       Nombre: nombre,
      Tipo : tipo,
      Marca : marca,
      Estado: estado
  };
 
  this.api.putProducto(productoEnviar).subscribe(data=>{
    let respuesta:ProductoI = data;
    if(respuesta===null){
      this.alerta.showError('No se pudo actualizar','Error al modificar');
    }else{
      this.alerta.showSucces('Se actualizó correctamente','Correcto');
      this.router.navigate(['dashboard']);

    }

  });
    
    
   

  }


eliminar(id,nombre,tipo,marca,estado){
  let datos: ProductoI = {
    IDProducto : id,
     Nombre: nombre,
    Tipo : tipo,
    Marca : marca,
    Estado: estado
};

  this.api.putEliiminarProducto(datos).subscribe(data=>{
    let respuesta:ProductoI = data;
    if(respuesta.Estado===0){
      this.alerta.showSucces('Se actualizó correctamente','Correcto')
      this.router.navigate(['dashboard']);
      
    }else{
      this.alerta.showError('No se pudo actualizar','Error al modificar')
      

    }
  });
}

salir(){
  this.router.navigate(['dashboard']);

}

}
