import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Collection } from 'src/app/models/collection';
import { CollectionService } from 'src/app/service/collection.service';

@Component({
  selector: 'app-update-collection',
  templateUrl: './update-collection.component.html',
  styleUrls: ['./update-collection.component.css']
})
export class UpdateCollectionComponent {

  idCollection!: number;
  collection: Collection = new Collection();
  constructor(private collectionService: CollectionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idCollection=this.route.snapshot.params['idCollection'];
    this.collectionService.getCollectionById(this.idCollection).subscribe(data =>{this.collection =<Collection>data;},error=>console.log(error));
    
    
  }

  onSubmit(){
    this.collectionService.updateCollection(this.idCollection,this.collection).subscribe( data =>{
      this.goToCollectionList();
    }
    , error => console.log(error));
  }

  goToCollectionList(){
    this.router.navigate(['DashboardAdmin/GestionDesMetadonneesTechniques']);
  }
}
