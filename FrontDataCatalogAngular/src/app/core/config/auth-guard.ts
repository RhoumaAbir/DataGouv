import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthentificationService } from '../services/services_utilisateur/authentification.service';
import { UtilisateurConnecteService } from '../services/services_utilisateur/utilisateur-connecte.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private service_authentification: AuthentificationService, private router: Router, private utilisateur_connecte: UtilisateurConnecteService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.service_authentification.isLoggedIn())  //L'utilisateur est authentifié
        {
            const userRole = this.utilisateur_connecte.getCurrentUser().roleUtilisateur.toString(); //---> réccupérer le role de l'utilisteur connecté
            console.log("Roleeeeeeeeeee =" + userRole);
            const allowedRole = route.data['role_autorise'] as string; // Obtenez le rôle autorisé à partir des données de la route
            console.log("Roleeeeeeeeeee Allowed =" + allowedRole);
            if (userRole === allowedRole) {
                return true;
            }
            else {
                // Rediriger vers une page d'erreur d'autorisation si l'utilisateur n'a pas le rôle nécessaire
                this.router.navigate(['/unauthorized']);
                return false;
            }
        }
        else //si l'utilisateur n'est pas authentifié
        {
            // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
            this.router.navigate(['/login']);
            return false;
        }
    }
}
//Rôle de cette classe :  est un garde de route (route guard) utlisée pour vérifier si l'utilisateur est authentifié avant de lui permettre d'accéder à une route particulière.