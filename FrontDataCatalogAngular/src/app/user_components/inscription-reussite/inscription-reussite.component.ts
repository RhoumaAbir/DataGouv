import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/services_utilisateur/authentification.service';
import { UtilisateurConnecteService } from 'src/app/core/services/services_utilisateur/utilisateur-connecte.service';

@Component({
  selector: 'app-inscription-reussite',
  templateUrl: './inscription-reussite.component.html',
  styleUrls: ['./inscription-reussite.component.css']
})
export class InscriptionReussiteComponent {

  constructor(private service_authentification: AuthentificationService, private route: ActivatedRoute, private utilisateur_connecte: UtilisateurConnecteService, private router: Router) {
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
    else {
      if (this.route.params == null) {
        this.router.navigate(['/home']);
      }
    }
  }

  Identifiant!: string;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Identifiant = params['parametre'];

    });
  }

}

