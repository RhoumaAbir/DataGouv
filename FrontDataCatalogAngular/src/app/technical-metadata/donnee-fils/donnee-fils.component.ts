import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonneeFils } from 'src/app/moodels/donnee-fils';
import { Source } from 'src/app/moodels/source';
import { DonneeFilsService } from 'src/app/service/donnee-fils.service';
import { DonneeParentService } from 'src/app/service/donnee-parent.service';

@Component({
  selector: 'app-donnee-fils',
  templateUrl: './donnee-fils.component.html',
  styleUrls: ['./donnee-fils.component.css']
})
export class DonneeFilsComponent {
 
  searchText: string = '';
  minPrice: number = 0;
  maxPrice: number = 5000;
  donneeFilss: DonneeFils[] = [];
  source!:Source[];
  donneeParentForm!: FormGroup;
  p: number = 1;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private donneeFilsService: DonneeFilsService
  ) {
    this.donneeParentForm = this.fb.group({
      nomTechniqueParent: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
      typeDonnee: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
      nbrLigne: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[0-9]+$/)]],
      commentaire: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      tailleEnOctets: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[0-9]+$/)]],
      nombreDonneeFils: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[0-9]+$/)]],
      sujet:['']
  
     });
  }
  get idSource() {
    return this.donneeParentForm.get('idSource')!;
  }
 


  //list
  ngOnInit(): void {
  
    this.DonneeFilsList();

  }

  private DonneeFilsList(){
    this.donneeFilsService.DonneeFilsList().subscribe(data => {
      this.donneeFilss = data;
      // Appeler filterEvents() pour mettre à jour filteredEvents au chargement initial
      
    });
  }
  affecterSourceAParent(idDonneeParent: number){
    this.router.navigate(['home_decideur/affectationParent', idDonneeParent]);
  }
  filterEvents() {
    this.donneeFilsService.DonneeFilsList().subscribe(data => {
      this.donneeFilss = data.filter(donneeFils => {
        const searchTextLower = this.searchText.toLowerCase();
        const nomTechniqueParentLower = donneeFils.nomTechniqueParent ? donneeFils.nomTechniqueParent.toLowerCase() : '';
        const sujetLower = donneeFils.sujet ? donneeFils.sujet.toLowerCase() : '';
        const typeDonneeLower = donneeFils.typeDonnee ? donneeFils.typeDonnee.toLowerCase() : '';
        const commentaireLower = donneeFils.commentaire ? donneeFils.commentaire.toLowerCase() : '';
    
        return (nomTechniqueParentLower.includes(searchTextLower) ||
                sujetLower.includes(searchTextLower) ||
                typeDonneeLower.includes(searchTextLower) ||
                commentaireLower.includes(searchTextLower)) &&
                donneeFils.tailleEnOctets >= this.minPrice &&
                donneeFils.tailleEnOctets <= this.maxPrice;
      });
    });
  }


}
