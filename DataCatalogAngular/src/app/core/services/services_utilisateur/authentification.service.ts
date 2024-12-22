import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Utilisateur } from '../../models/utilisateur';
import { Utilisateurlogin } from '../../models/utilisateurlogin';
import { UtilisateurConnecteService } from './utilisateur-connecte.service';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient, private utilisateur_connecte: UtilisateurConnecteService) { }



  loginAdmin(util_login: Utilisateurlogin): Observable<Utilisateur> {
    return this.http.post<Utilisateur>("http://localhost:8083/catalogue/LoginController/login", util_login).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error.message); // Transmettre le message d'erreur au composant de connexion
      })
    );
  }


  logout() {
    // Supprimer le token JWT du stockage local lors de la déconnexion
    this.setToken(null);
    //Supprimer l'utilisateur connecté et son organisation
    this.utilisateur_connecte.clearCurrentUser();
  }


  setToken(token: string | null): void {
    if (token !== null) {
      localStorage.setItem('jwtToken', token);
    }
    else {
      localStorage.removeItem('jwtToken');
    }
  }

  isLoggedIn() {
    // Vérifier si l'utilisateur est connecté en vérifiant la présence du token JWT dans le stockage local
    return localStorage.getItem('jwtToken') !== null;
  }

  getToken() {
    // Récupérer le token JWT du stockage local
    return localStorage.getItem('jwtToken');
  }






  // *************************** Gestion du jeton *********************


  // *************************** Fin Gestion du jeton *********************



}
