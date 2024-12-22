import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonneeParent } from 'src/app/models/donnee-parent';
import { Source } from 'src/app/models/source';
import { DonneeParentService } from 'src/app/service/donnee-parent.service';

@Component({
  selector: 'app-donnee-parent',
  templateUrl: './donnee-parent.component.html',
  styleUrls: ['./donnee-parent.component.css']
})
export class DonneeParentComponent {
  donneeParents: DonneeParent[] = [];
  source!:Source[];
  donneeParentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private donneeParentService: DonneeParentService
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
  
    this.DonneeParentList();

  }

  private DonneeParentList(){
    this.donneeParentService.DonneeParentList().subscribe(data => {
      this.donneeParents = data;
      this.donneeParents = this.donneeParents.filter(donneeParent => donneeParent.sourceList);
    });
  }
  affecterSourceAParent(idDonneeParent: number){
    this.router.navigate(['home_decideur/affectationParent', idDonneeParent]);
  }



  
}
