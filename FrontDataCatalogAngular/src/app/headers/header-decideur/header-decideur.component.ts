import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/services_utilisateur/authentification.service';
import { UtilisateurConnecteService } from 'src/app/core/services/services_utilisateur/utilisateur-connecte.service';

@Component({
  selector: 'app-header-decideur',
  templateUrl: './header-decideur.component.html',
  styleUrls: ['./header-decideur.component.css']
})
export class HeaderDecideurComponent {
  constructor(private service_authentification: AuthentificationService, private router: Router, private utilisateur_connecte: UtilisateurConnecteService) { }

  logout() {
    this.service_authentification.logout();
    this.router.navigate(['/login']);
  }

  UtilisateurConnecte: string = this.utilisateur_connecte.getCurrentUser().identifiantUtilisateur;

  EntrepriseDecideurrConncete: string = this.utilisateur_connecte.getOrganisation().nomOrganisation;

}
