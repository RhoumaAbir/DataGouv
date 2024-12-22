import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/services_utilisateur/authentification.service';
import { UtilisateurConnecteService } from 'src/app/core/services/services_utilisateur/utilisateur-connecte.service';

@Component({
  selector: 'app-header-auditeur',
  templateUrl: './header-auditeur.component.html',
  styleUrls: ['./header-auditeur.component.css']
})
export class HeaderAuditeurComponent {
  constructor(private service_authentification: AuthentificationService, private router: Router, private utilisateur_connecte: UtilisateurConnecteService) { }

  logout() {
    this.service_authentification.logout();
    this.router.navigate(['/login']);
  }

  UtilisateurConnecte: string = this.utilisateur_connecte.getCurrentUser().identifiantUtilisateur;

  OrganisationAuditeurConncete: string = this.utilisateur_connecte.getOrganisation().nomOrganisation;


}
