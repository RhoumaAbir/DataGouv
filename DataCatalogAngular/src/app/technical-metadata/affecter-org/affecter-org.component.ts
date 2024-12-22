import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurConnecteService } from 'src/app/core/services/services_utilisateur/utilisateur-connecte.service';
import { Collection } from 'src/app/models/collection';
import { Organisation } from 'src/app/models/organisation';
import { CollectionService } from 'src/app/service/collection.service';

@Component({
  selector: 'app-affecter-org',
  templateUrl: './affecter-org.component.html',
  styleUrls: ['./affecter-org.component.css']
})
export class AffecterOrgComponent {
  organisation: Organisation = new Organisation();
  idCollection!: number;
  collection: Collection = new Collection();
  constructor(private utilisateur_connecte: UtilisateurConnecteService, private collectionService: CollectionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idCollection = this.route.snapshot.params['idCollection'];
    this.collectionService.getCollectionById(this.idCollection).subscribe(data => {
      this.collection = <Collection>data;
      // Initialize collection.organisation if it is null
      if (!this.collection.organisation) {
        this.collection.organisation = new Organisation();
      }
    },
      error => console.log(error)
    );


  }
  // ***  this.collectionService.affecterOrgACollection(this.idCollection, this.getOrganisation().idOrganisation )
  onSubmit() {
    this.collectionService.affecterOrgACollection(this.idCollection, this.collection.organisation.idOrganisation)
      .subscribe(
        (data) => {
          // Gestion des opérations après le succès
          this.goToCollectionList();
        },
        (error) => {
          // Gestion des erreurs
          console.error('Une erreur s\'est produite :', error);
          // Ajoutez ici du code pour afficher un message d'erreur ou effectuer d'autres actions en cas d'échec.
        }
      );
  }
  goToCollectionList() {
    this.router.navigate(['DashboardAdmin/GestionDesMetadonneesTechniques']);
  }


}
