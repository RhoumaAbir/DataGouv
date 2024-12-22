import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurConnecteService {


  private readonly USER_KEY = 'currentUser';
  private readonly ORGANISATION_KEY = 'currentOrganisation';

  constructor() { }

  setCurrentUser(user: any): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  setCurrentOrganisation(organisation: any): void {
    localStorage.setItem(this.ORGANISATION_KEY, JSON.stringify(organisation));
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
  getOrganisation(): any {
    const oraganisationJson = localStorage.getItem(this.ORGANISATION_KEY);
    if (oraganisationJson) {
      return JSON.parse(oraganisationJson);
    }
    else {
      return null;
    }
  }

  clearCurrentUser() {
    localStorage.removeItem(this.USER_KEY);
  }
  clearCurrentOrganisation() {
    localStorage.removeItem(this.ORGANISATION_KEY);
  }


  /*
   currentUser: any;
 
   currentOrganisation: any;
 
   constructor() { }
 
   setCurrentUser(user: any) {
     this.currentUser = user;
   }
 
 
   setCurrentOrganisation(organisation: any) {
     this.currentOrganisation = organisation;
   }
 
   getCurrentUser() {
     return this.currentUser;
   }
 
   getCurrentOrganisation() {
     return this.currentOrganisation;
   }
 
   clearCurrentUser() {
     this.currentUser = null;
   }
 
   clearCurrentOrganisation() {
     this.currentOrganisation = null;
   }
 
 */
}
