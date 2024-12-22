import { Component } from '@angular/core';
import { Collection } from '../moodels/collection';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionService } from '../service/collection.service';
import { Source } from '../moodels/source';
import { SourceService } from '../service/source.service';

@Component({
  selector: 'app-afficher-entreprises',
  templateUrl: './afficher-entreprises.component.html',
  styleUrls: ['./afficher-entreprises.component.css']
})
export class AfficherEntreprisesComponent {
  sources!:Source[];
  collections: Collection[] = [];
  collectionForm!: FormGroup;
  

  constructor(private fb: FormBuilder,private router: Router, private collService:CollectionService, private sourceService:SourceService) {
   this.collectionForm = this.fb.group({
   
    nomCollection: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
      });
    }
  
  get NomCollection() {
    return this.collectionForm.get('NomCollection')!;
  }


ngOnInit(): void {
  
  this.getCollection();
  this.getSource();
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

private getSource(){
  this.sourceService.sourceList().subscribe(data => {
    this.sources = data;
    this.sources = this.sources.filter(source => source.collection);

  });
}






}
