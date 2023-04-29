import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private user = 'user4';//tambien en producto.service.ts
  constructor() {
    let storedSession;
    window.addEventListener('beforeunload', () => {
      storedSession = localStorage.getItem(this.user);
    });
    if (storedSession!=null) {
      sessionStorage.setItem(this.user, storedSession);
    }else{
      const token = Math.floor(Math.random() * 1000).toString();
      sessionStorage.setItem(this.user, token);
      localStorage.setItem(this.user, token);
    }
  }
}
