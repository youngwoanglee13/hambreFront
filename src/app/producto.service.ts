import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  private productoUrl = 'https://81b4-181-177-129-194.ngrok-free.app/';  // URL to web api
  constructor(private http: HttpClient) {
    
   }
  getProducto(): Observable<Producto> {
    const url = `${this.productoUrl}dishes/1`;//?temporalmente producto 1
    const headers = new HttpHeaders({'ngrok-skip-browser-warning': 'true'});
    //this.http.get(url,{headers}).subscribe(producto => console.log(producto));
    //this.http.get(url).subscribe(producto => console.log(producto));
     return this.http.get<Producto>(url,{headers});
    // return sample product as Producto without reques
    //  return new Observable<Producto>(subscriber => {
    //   subscriber.next({
    //     id: 1,
    //     name: 'Pizza',
    //     description: 'Pizza de peperoni',
    //     price: 10,
    //     image: 'https://www.dominos.com.mx/Imagenes/Menu/Menu%20Pizzas/Menu%20Pizzas%20-%20Pepperoni.jpg'
    //   })});
  }
  getNextProducto(): Observable<Producto> {
  //const url = `${this.productoUrl}dishes/1`;
    //console.log(sessionStorage.getItem('user4'));
    const url = `${this.productoUrl}sessions/${sessionStorage.getItem('user4')}/next_dish`;//?temporalmente producto 1
    const headers = new HttpHeaders({'ngrok-skip-browser-warning': 'true'});
    return this.http.get<Producto>(url,{headers});
  }
}
