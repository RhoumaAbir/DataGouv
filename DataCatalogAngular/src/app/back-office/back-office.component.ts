import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../core/services/services_utilisateur/authentification.service';
import { UtilisateurConnecteService } from '../core/services/services_utilisateur/utilisateur-connecte.service';
import { Utilisateur } from '../core/models/utilisateur';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent {

  constructor(private service_authentification: AuthentificationService, private utilisateur_connecte: UtilisateurConnecteService, private router: Router) { }

  AdminisatrateurConnecte: Utilisateur = this.utilisateur_connecte.getCurrentUser();

  logout() {
    this.service_authentification.logout();
    this.router.navigate(['/login']);
  }

}
