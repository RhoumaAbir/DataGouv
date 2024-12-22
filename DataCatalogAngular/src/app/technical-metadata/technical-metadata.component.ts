import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionService } from '../service/collection.service';
import { Collection } from '../models/collection';

@Component({
  selector: 'app-technical-metadata',
  templateUrl: './technical-metadata.component.html',
  styleUrls: ['./technical-metadata.component.css']
})
export class TechnicalMetadataComponent  {

  collections: Collection[] = [];
  collectionForm!: FormGroup;
  

  constructor(private fb: FormBuilder,private router: Router, private collService:CollectionService) {
   this.collectionForm = this.fb.group({
   
    nomCollection: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
      });
  }
  onSubmit() {
    if (this.collectionForm.valid) {
      this.collService.ajouterCollection(this.collectionForm.getRawValue()).subscribe(() =>
      window.location.reload()
       
      );
    } else {
     
    }
  }
  
  get NomCollection() {
    return this.collectionForm.get('NomCollection')!;
  }


ngOnInit(): void {
  
  this.getCollection();
}

 getCollection() {
  this.collService.collectionList().subscribe(
    data => {
      this.collections = data;
    },
    error => {
      console.error('Error fetching collections:', error);
      // Handle error appropriately
    }
  );

}
//update

  updateCollection(idCollection: number){
    this.router.navigate(['DashboardAdmin/update-collection/', idCollection]);
  }

  
  deleteCollection(id: number){
    this.collService.deleteCollection(id).subscribe( data => {
      console.log(data);
      this.getCollection();
    })
  }
  deleteAffectation(idCollection: number,idOrganisation:number ){
  this.collService.deleteAffectation(idCollection, idOrganisation).subscribe( data => {
    console.log(data);
    this.getCollection();
  })
}

  affecterCollection(idCollection: number){
    this.router.navigate(['DashboardAdmin/affecter-collection', idCollection]);
  }


}


