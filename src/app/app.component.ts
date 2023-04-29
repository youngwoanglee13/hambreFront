import { Component } from '@angular/core';
//import { SessionStorageService } from './session-storage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hambre';
  // ngOnInit(): void {
  //   sessionStorage.setItem('clave', Math.floor(Math.random() * 1000000) + '');
  // }
  ngOnInit(): void {
    const user = 'user4';
    let storedSession;
    //window.addEventListener('beforeunload', () => {
      storedSession = localStorage.getItem(user);
    //});
    if (storedSession!=null) {
      sessionStorage.setItem(user, storedSession);
    }else{
      const token = Math.floor(Math.random() * 1000).toString();
      sessionStorage.setItem(user, token);
      localStorage.setItem(user, token);
    }
  }
  
  //constructor(private sessionStorageService: SessionStorageService) {}
}
