import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonneeParent } from 'src/app/moodels/donnee-parent';
import { Source } from 'src/app/moodels/source';
import { DonneeParentService } from 'src/app/service/donnee-parent.service';
import { SourceService } from 'src/app/service/source.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-donnee-parent',
  templateUrl: './donnee-parent.component.html',
  styleUrls: ['./donnee-parent.component.css']
})
export class DonneeParentComponent {
  p: number = 1;
  donneeParents: DonneeParent[] = [];
  sources!:Source[];
  donneeParentForm!: FormGroup;
  csvForm!:FormGroup
  myForm!: FormGroup;
  excelForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private donneeParentService: DonneeParentService,
    private sourceService : SourceService
  ) {}

  fieldName: string = '';

  ngOnInit(): void {
    this.getSource();
    this.DonneeParentList();
    console.log("form", this.donneeParentForm);
    this.myForm = this.fb.group({
      idSource: ['']

    });
    this.excelForm = this.fb.group({
      excelFile: [''],
      idSource: [''],
   
    });
    this.csvForm = this.fb.group({
      csvFile: [''],
      idSource: ['']
    });

  }
  private getSource(){
    console.log("form in getSource",this.donneeParentForm )

    this.sourceService.sourceList().subscribe(data => {
      this.sources = data;
      this.sources = this.sources.filter(source => source.collection);
  
    });
  }
  private DonneeParentList() {
    console.log("form in DonneeParentList",this.donneeParentForm )

    this.donneeParentService.DonneeParentList().subscribe(data => {
      this.donneeParents = data.filter(donneeParent =>
        donneeParent.sourceList &&
        Array.isArray(donneeParent.sourceList) &&
        donneeParent.sourceList.every(source => source.idSource !== undefined)
      );
    });
  }
  voir(){
    this.router.navigate(['home_decideur/donnee_fils']);
  }
  deleteAffectations(idDonneeParent: number, sourceList: Source[]) {
    if (sourceList && sourceList.length > 0) {
      sourceList.forEach(source => {
        const idSource = source.idSource;
        this.deleteAffectation(idDonneeParent, idSource);
      });
    } else {
      console.log('No affectations to delete.');
    }
  }
  
  deleteAffectation(idDonneeParent: number, idSource: number) {
    this.donneeParentService.deleteAffectationParent(idDonneeParent, idSource).subscribe((data: any) => {
      console.log(data);
      this.getSource();
    });
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
        const newControl = this.fb.control('', Validators.required);
        this.myForm.addControl(fieldName, newControl);
  
        const label = document.createElement('label');
        label.setAttribute('for', fieldName);
        label.innerText = labelName;
  
        const input = document.createElement('input');
        input.setAttribute('id', fieldName);
        input.setAttribute('formControlName', fieldName);  
      }
    });
 
    const container = document.getElementById('input-container');
    if (container) {
      container.appendChild(inputElement);
      container.appendChild(addButton);
    } else {
      console.error('Container element not found.');
    }
  }
  
  envoyer(): void {
    const formControls = this.myForm.controls;
  
    const validControls: any[] = [];
  
  Object.keys(formControls).forEach(key => {
    const control = formControls[key];

    if (control && control.valid) {
      const keyValueObject = {
        "nomTechniqueParent": key,
        "nomTechniqueFils": control.value.toString()
      };
      validControls.push(keyValueObject);
    }
  });
   const formData = this.myForm.value; 
   const idSource = formData.idSource;
    console.log("this.myForm", validControls);
    this.donneeParentService.testfetchData(validControls, idSource).subscribe(
      (response) => {
        console.log('DonneeFils ajoutée avec succès', response);
        window.location.reload();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de DonneeFils', error);
      }
    );
 
}
onAjouter(): void {
  const fileInput = this.excelForm.get('excelFile');
  const file: File | null = fileInput ? fileInput.value : null; // Récupérer le fichier depuis le champ de fichier
  const idSource = this.excelForm.get('idSource')?.value;

  if (file && idSource) {
    this.sourceService.uploadExcelFile(file, idSource).subscribe(
      response => {
        console.log('Success:', response);
        // Traitez la réponse comme nécessaire
      },
      error => {
        console.error('Error:', error);
        // Traitez l'erreur comme nécessaire
      }
    );
  } else {
    console.error('Veuillez remplir tous les champs du formulaire.');
    // Gérer le cas où les champs du formulaire ne sont pas remplis
  }
}

onFileChange(event: any): void {
  const file = event.target.files[0];
  this.excelForm.patchValue({ excelFile: file }); // Utilisez excelForm au lieu de myForm
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    const bstr: string = e.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];
    const data: any[] = XLSX.utils.sheet_to_json(ws, { header: 1 });
    console.log(data); 
  };
  reader.readAsBinaryString(file); // Utilisez le fichier plutôt que target.files[0]
}

ajouterCsv(): void {
  const csvFileControl = this.csvForm.get('csvFile');
  const idSourceControl = this.csvForm.get('idSource');
  
  if (csvFileControl && idSourceControl && csvFileControl.value && idSourceControl.value) {
    const file: File = csvFileControl.value;
    const idSource: number = idSourceControl.value;
  
    const formData = new FormData();
    formData.append('file', file, file.name);
  
    // Envoyer le formulaire avec le fichier CSV au service pour traitement
    this.sourceService.uploadCsvFile(file, idSource).subscribe(
      (response: any) => {
        console.log('Réponse du serveur :', response);
        // Traiter la réponse si nécessaire
      },
      (error: any) => {
        console.error('Erreur lors de l\'envoi du fichier CSV :', error);
        // Traiter l'erreur si nécessaire
      }
    );
  } else {
    console.error('Les contrôles du formulaire ou leurs valeurs sont null.');
  }
}
onFile(event: any): void {
  const file = event.target.files[0];
  this.csvForm.patchValue({ csvFile: file }); // Utilisez csvForm au lieu de excelForm

  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    const csvData: string = e.target.result;
    console.log(csvData); // Affichez les données CSV dans la console

    // Traitez les données CSV comme nécessaire
    // Ici, vous pouvez analyser les données CSV et les convertir en tableau ou les envoyer au service pour traitement
  };

  reader.readAsText(file); // Utilisez readAsText pour lire le contenu du fichier CSV
}

likeEvent(event: DonneeParent): void {
  if (!event.liked && !event.disliked) {
    this.donneeParentService.likeDonneeParent(event.idDonneeParent).subscribe(
      (updatedEvent: DonneeParent) => {
        // Mise à jour des données de l'événement
        event.liked = updatedEvent.liked;
      }
    );
  }
}

dislikeEvent(event: DonneeParent): void {
  if (!event.liked && !event.disliked) {
    this.donneeParentService.dislikeDonneeParent(event.idDonneeParent).subscribe(
      (updatedEvent: DonneeParent) => {
        // Mise à jour des données de l'événement
        event.disliked = updatedEvent.disliked;
      }
    );
  }
}

}











