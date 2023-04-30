import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilUsuarioService {
  
  private productoUrl = 'https://6bab-2803-9400-3-5a4c-3cb8-5834-8438-9027.ngrok-free.app/';  // URL to web api
  constructor(private http: HttpClient) {
    
   }
   
  setUsuario(): void {
    const url = `${this.productoUrl}users`;//?temporalmente producto 1
    const headers = new HttpHeaders({'ngrok-skip-browser-warning': 'true'});
    this.http.post(url,{'username': sessionStorage.getItem('usuario')},{headers}).subscribe(response => {
      // Aquí se puede manejar la respuesta de la petición POST
    }); 
  }
  
}

