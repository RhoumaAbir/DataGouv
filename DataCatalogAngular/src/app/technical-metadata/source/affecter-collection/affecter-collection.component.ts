import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection } from 'src/app/models/collection';
import { Organisation } from 'src/app/models/organisation';
import { Source } from 'src/app/models/source';
import { SourceService } from 'src/app/service/source.service';

@Component({
  selector: 'app-affecter-collection',
  templateUrl: './affecter-collection.component.html',
  styleUrls: ['./affecter-collection.component.css']
})
export class AffecterCollectionComponent {
  source: Source= new Source();
  organisation: Organisation= new Organisation();
  idSource!: number;
  collection: Collection = new Collection();
  constructor(private sourceService: SourceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idSource=this.route.snapshot.params['idSource'];
    this.sourceService.getSourceById(this.idSource).subscribe( data => {
      this.source = <Source>data;
      if (!this.collection.organisation) {
        this.collection.organisation = new Organisation();
      }
      // Initialize collection.organisation if it is null
      if (!this.source.collection) {
        this.source.collection = new Collection();
      }
    },
    error => console.log(error)
  );

    
  }

  onSubmit() {
    this.sourceService.affecterCollectionASource(this.idSource, this.source.collection.idCollection)
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
  goToCollectionList(){
    this.router.navigate(['DashboardAdmin/GestionDesMetadonneesTechniques/source']);
  }
}
