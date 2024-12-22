import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthentificationService } from '../services/services_utilisateur/authentification.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private service_authentification: AuthentificationService, private router: Router) { }

    canActivate(): boolean {
        if (this.service_authentification.isLoggedIn()) {
            return true;
        } else {
            // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
            this.router.navigate(['/login']);
            return false;
        }
    }
}
//Rôle de cette classe :  est un garde de route (route guard) utlisée pour vérifier si l'utilisateur est authentifié avant de lui permettre d'accéder à une route particulière.