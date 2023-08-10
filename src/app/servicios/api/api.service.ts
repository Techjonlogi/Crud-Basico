import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import{ProductoI} from '../../Modelos/Producto.interface';
import{Tipoi} from '../../Modelos/Tipo.interface'
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class ApiService {
url:string = "http://localhost/Api/";
  constructor(private http:HttpClient) {}

  getProductos():Observable<ProductoI[]>{
    let direccion = this.url + "get/productos";
    return this.http.get<ProductoI[]>(direccion);
  }

  getTipos():Observable<Tipoi[]>{
    let direccion = this.url + "get/tipo";
    return this.http.get<Tipoi[]>(direccion);

  }

  getProducto(id):Observable<ProductoI>{
    let direccion = this.url + "get/producto/"+id;
    return this.http.get<ProductoI>(direccion);
  }
  

}
