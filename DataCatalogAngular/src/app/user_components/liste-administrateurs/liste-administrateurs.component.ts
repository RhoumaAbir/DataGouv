import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Utilisateur } from 'src/app/core/models/utilisateur';
import { UtilisateurService } from 'src/app/core/services/services_utilisateur/utilisateur.service';

@Component({
  selector: 'app-liste-administrateurs',
  templateUrl: './liste-administrateurs.component.html',
  styleUrls: ['./liste-administrateurs.component.css']
})
export class ListeAdministrateursComponent implements OnInit {

  listeAdministrateurs: Utilisateur[] = [];

  constructor(private serviceUtilisateur: UtilisateurService, private changed_detacted: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ReccupererListeAdministrateurs();

  }

  ReccupererListeAdministrateurs(): void {
    this.serviceUtilisateur.getAllAdministrators()
      .subscribe(utilisateurs => { this.listeAdministrateurs = utilisateurs; }, error => { console.log(error); });

  }

  SupprimerUtilisateur(id_utilisateur: number): void {
    this.serviceUtilisateur.deleteUser(id_utilisateur).subscribe(() => {
      this.ReccupererListeAdministrateurs();
      this.changed_detacted.detectChanges(); // Force la mise à jour de la vue
    });
  }




}
