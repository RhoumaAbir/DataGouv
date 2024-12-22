import { Component } from '@angular/core';
import { AuthentificationService } from '../core/services/services_utilisateur/authentification.service';
import { UtilisateurConnecteService } from '../core/services/services_utilisateur/utilisateur-connecte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service_authentification: AuthentificationService, private utilisateur_connecte: UtilisateurConnecteService, private router: Router) {
    if (this.service_authentification.isLoggedIn()) //si l'utilisareur est connecté
    {
      // Rediriger l'utilisateur vers son page d'accueil (selon son role)
      if (this.utilisateur_connecte.getCurrentUser().roleUtilisateur.toString() === 'DECIDEUR') {
        this.router.navigate(['/home_decideur']);
      }
      else if (this.utilisateur_connecte.getCurrentUser().roleUtilisateur.toString() === 'AUDITEUR') {
        this.router.navigate(['/home_auditeur']);
      }
      else if (this.utilisateur_connecte.getCurrentUser().roleUtilisateur.toString() === 'ANALYSTE') {
        this.router.navigate(['/home_analyste']);
      }
    }
  }

}
