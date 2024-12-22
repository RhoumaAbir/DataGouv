import { Component } from '@angular/core';
import { Collection } from '../moodels/collection';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CollectionService } from '../service/collection.service';
import { SourceService } from '../service/source.service';
import { Source } from '../moodels/source';
import { Organisation } from '../moodels/organisation';
import { DonneeParent } from '../moodels/donnee-parent';
import { UtilisateurConnecteService } from '../core/services/services_utilisateur/utilisateur-connecte.service';

@Component({
  selector: 'app-technical-metadata',
  templateUrl: './technical-metadata.component.html',
  styleUrls: ['./technical-metadata.component.css']
})
export class TechnicalMetadataComponent {
  organisations!:Organisation[];
  collections!:Collection[];
  collectionForm!: FormGroup;
  sources!:Source[];
  donneeParents!:DonneeParent[];
  sourceForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private collService: CollectionService,
    private sourceService: SourceService,
    private utilisateur_connecte: UtilisateurConnecteService,
  ) {
    this.collectionForm = this.fb.group({
      nomCollection: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],

    });
    this.sourceForm = this.fb.group({
      nomSource: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
      fournisseurSource: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      commmentaireSource: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      motDePasse: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      idCollection: ['', [Validators.required]]
     });
  }
  get NomCollection() {
    return this.collectionForm.get('NomCollection')!;
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
      this.router.navigate(['home_decideur/update-collection/', idCollection]);
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
    
      this.collService.affecterOrgACollection(idCollection, this.utilisateur_connecte.getOrganisation().idOrganisation)
      .subscribe(

        (data) => {

          // Gestion des opérations après le succès
        
        },
        (error) => {
          // Gestion des erreurs
          console.error('Une erreur s\'est produite :', error);
          // Ajoutez ici du code pour afficher un message d'erreur ou effectuer d'autres actions en cas d'échec.
        }
      );
    }
  envoyer() {
    if (this.sourceForm.valid) {
      
      const formData = this.sourceForm.getRawValue();
  
      const idCollectionValue = this.sourceForm.get('idCollection')?.value;
  
      if (idCollectionValue !== undefined && idCollectionValue !== null) {
    
        this.sourceService.ajouterSourceCollection(formData, idCollectionValue).subscribe(
          () => {
       
            console.log('Collection ajoutée avec succès');
            window.location.reload(); 
          },
          (error) => {
          
            console.error('Erreur lors de l\'ajout de la collection', error);
          
          }
        );
      } else {
        console.error('idCollection is not defined or null'); 
      }
    } else {
      console.error('Form is not valid');
    }
  }
  onSubmit() {
    if (this.collectionForm.valid) {
      this.collService.ajouterCollection(this.collectionForm.getRawValue()).subscribe(() =>
      window.location.reload()
       
      );
    } else {
     
    }
  }
  

  get idOrganisation() {
    return this.collectionForm.get('idOrganisation')!;
  }
  get idCollection() {
    return this.collectionForm.get('idCollection')!;
  }
//list
  ngOnInit(): void {
    this.getCollection();
    this.getSource();
  }




  


private getSource(){
  this.sourceService.sourceList().subscribe(data => {
    this.sources = data;
    this.sources = this.sources.filter(source => source.collection);

  });
}
voir(){
  this.router.navigate(['home_decideur/donnee_parent']);
}

addInput() {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', 'text');
  inputElement.setAttribute('class', 'form-control');

  const addButton = document.createElement('button');
  addButton.innerText = 'Add';
  addButton.setAttribute('class', 'btn btn-success');
  addButton.addEventListener('click', () => {
    const labelName = inputElement.value.trim();
    if (labelName) {
      const fieldName = labelName;
      console.log('fieldName:', fieldName);

      // Create a new FormControl and add it to the myForm FormGroup
      const newControl = this.fb.control('', Validators.required);
      this.sourceForm.addControl(fieldName, newControl);

      // Dynamically create label with user-specified name and append it to the form
      const label = document.createElement('label');
      label.setAttribute('for', fieldName);
      label.innerText = labelName;

      const input = document.createElement('input');
      input.setAttribute('id', fieldName);
      input.setAttribute('formControlName', fieldName);

      // Append label and input to the container
      const container = document.getElementById('input-container');
      /*if (container) {
        container.appendChild(label);
        container.appendChild(input);

        // Subscribe to value changes of the new control
        newControl.valueChanges.subscribe(value => {
          console.log(`Value of ${fieldName}:`, value);
        });

        console.log('Updated myForm:', this.myForm);
      } else {
        console.error('Container element not found.');
      }*/
    }
  });

  // Append the input and button to the container
  const container = document.getElementById('input-container');
  if (container) {
    container.appendChild(inputElement);
    container.appendChild(addButton);
  } else {
    console.error('Container element not found.');
  }
}
}
