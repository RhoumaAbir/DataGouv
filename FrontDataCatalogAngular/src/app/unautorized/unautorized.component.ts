import { Component } from '@angular/core';
import { AuthentificationService } from '../core/services/services_utilisateur/authentification.service';
import { Router } from '@angular/router';
import { UtilisateurConnecteService } from '../core/services/services_utilisateur/utilisateur-connecte.service';

@Component({
  selector: 'app-unautorized',
  templateUrl: './unautorized.component.html',
  styleUrls: ['./unautorized.component.css']
})
export class UnautorizedComponent {

  constructor(private service_authentification: AuthentificationService, private router: Router, private utilisateur_connecte: UtilisateurConnecteService) {


  }


  RetourVersLaPageAutorise() {

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
