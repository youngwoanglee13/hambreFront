import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { PerfilUsuarioService } from './perfil-usuario.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hambre';
  ngOnInit(): void {
    //this.abrirDialog();//AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
    const key = 'llave';
    let storedSession;
    //window.addEventListener('beforeunload', () => {
      storedSession = localStorage.getItem(key);
    //});
    if (storedSession!=null) {
      sessionStorage.setItem(key, storedSession);
    }else{
      const token = Math.floor(Math.random() * 1000).toString();
      sessionStorage.setItem(key, token);
      localStorage.setItem(key, token);
    }
  }
  abrirDialog() {
    console.log("creando nuevo usuario");
    let dialogRef = this.dialog.open(PerfilUsuarioComponent);
    dialogRef.afterClosed().subscribe(result => {sessionStorage.setItem("usuario",result);this.perfilUsuarioService.setUsuario(); });
    
    
    
   
  }
  constructor(public dialog: MatDialog,private perfilUsuarioService: PerfilUsuarioService,) {}
}
