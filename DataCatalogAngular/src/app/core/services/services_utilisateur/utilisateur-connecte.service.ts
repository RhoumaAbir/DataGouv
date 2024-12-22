import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurConnecteService {

  private readonly USER_KEY = 'currentUser';


  constructor() { }

  setCurrentUser(user: any): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }


  getCurrentUser(): any {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) {
      return JSON.parse(userJson);
    }
    else {
      return null;
    }
  }




  clearCurrentUser() {
    localStorage.removeItem(this.USER_KEY);
  }



}
