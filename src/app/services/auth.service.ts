import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   constructor( ) { 
  }

  login(email: string, password: string){
    if(email === 'admin' && password === 'admin'){
      localStorage.setItem('currentUser', "loggedIn");
      return true;
    }
    return false
  }
  logout(){
    localStorage.removeItem('currentUser');
  }

  public get logedInRes(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }
}
