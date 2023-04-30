import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-perfil-usuario',
  styleUrls: ['./perfil-usuario.component.css'],
  template: `
    
  <div id="form">
   <input type="text" [(ngModel)]="nombre" (ngModelChange)="nombre = $event" placeholder="Usuario" required>
    <button mat-raised-button (click)="enviarNombre()">Aceptar</button>
  </div>  
  `,
})
export class PerfilUsuarioComponent {
  nombre: string = '';

  constructor(public dialogRef: MatDialogRef<PerfilUsuarioComponent>) {}

  enviarNombre() {
    if(this.nombre.length > 0){
      this.dialogRef.close(this.nombre);
    }
    
  }
}
