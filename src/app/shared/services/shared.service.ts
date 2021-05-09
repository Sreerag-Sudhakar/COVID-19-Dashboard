import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  logOut():void {
    return window.localStorage.removeItem('isLoggedIn')
  }
}
