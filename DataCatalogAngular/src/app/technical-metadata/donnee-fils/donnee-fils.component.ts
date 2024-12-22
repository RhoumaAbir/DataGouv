import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonneeFils } from 'src/app/donnee-fils';
import { Source } from 'src/app/models/source';
import { DonneeFilsService } from 'src/app/service/donnee-fils.service';
import { DonneeParentService } from 'src/app/service/donnee-parent.service';

@Component({
  selector: 'app-donnee-fils',
  templateUrl: './donnee-fils.component.html',
  styleUrls: ['./donnee-fils.component.css']
})
export class DonneeFilsComponent {
  donneeFilss: DonneeFils[] = [];
  source!:Source[];
  donneeParentForm!: FormGroup;

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
      idSource:['']
  
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
    
    });
  }
  affecterSourceAParent(idDonneeParent: number){
    this.router.navigate(['home_decideur/affectationParent', idDonneeParent]);
  }


}
