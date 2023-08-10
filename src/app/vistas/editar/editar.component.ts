import { Component } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import {ApiService} from "../../servicios/api/api.service"
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
    Marca: new FormControl('')

  });

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService){

  }

  ngOnInit():void{
    let productoid = this.activerouter.snapshot.paramMap.get('id');
    this.api.getProducto(productoid).subscribe(data =>{
    this.datosProducto = data[0];
    this.editarForm.setValue({
      'IDProducto': this.datosProducto.IDProducto,
      'Nombre': this.datosProducto.Nombre,
      'Tipo': this.datosProducto.Tipo,
      'Marca': this.datosProducto.Marca
  
    });
    console.log(this.editarForm.value)  
  })
     
    
  }

}
