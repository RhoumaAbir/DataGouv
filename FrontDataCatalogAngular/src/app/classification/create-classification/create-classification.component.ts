import { Component, OnInit } from '@angular/core';
import { Classification } from '../classification';
import { ClassificationService } from '../classification.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DonneeParent } from '../donnee-parent';
import { DonneeFils } from '../donnee-fils';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-classification',
  templateUrl: './create-classification.component.html',
  styleUrls: ['./create-classification.component.css']
})
export class CreateClassificationComponent implements OnInit {
  descriptionClassification: any;
  classificationForm: any;
  creationEnabledDonneeParent:boolean = false;
  creationEnabledDonneFils: boolean = false;
  donneparents:DonneeParent[]=[];
  donnefils:DonneeFils[]=[];
  donneParen!:number;
  donnefil!:number;
  
  constructor(private classificationService:ClassificationService,private router:Router,private  formBuilder: FormBuilder){
  }
  DonneParentValue(){
    if(!this.DonneParentValue)
    {
      this.donneParen=0;

    }

  }
  DonneFilsValue(){
    if(!this.DonneParentValue)
    {
      this.donnefil =0;

    }

  }
  donneParentrows= [
    this.ListDonneeParent()
   
  ];
  
   donneFilsrows = [
    this.ListDonneeFils()
];

 
  classification: Classification = new Classification();
  ngOnInit(): void { }
  
  /*onUploadFiles(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
        const fichierPreuveClassification: File = files[0]; 
        const formData = new FormData();
        formData.append('fichierPreuveClassification', fichierPreuveClassification, fichierPreuveClassification.name);
        console.log(fichierPreuveClassification);
        this.classificationService.upload(formData).subscribe(
            event => {
                console.log(event);
            },
            error => {
                console.log(error);
            }
        );
    }
}
*/
ListDonneeParent(){
  this.classificationService.getdonneParent().subscribe(data=>this.donneparents=data);
}
ListDonneeFils(){
  this.classificationService.getDonneeFils().subscribe(data=>this.donnefils=data);
}


onUploadFiles(event: any): void {
  const files = event.target.files;
  if (files.length > 0) {
    // Nettoyer le chemin du premier fichier sélectionné
    this.classification.fichierPreuveClassification = this.cleanPath(files[0].name);
  }
}

cleanPath(filePath: string): string {

  const cleanedPath = filePath.replace(/[^\w\s.-]/gi, '');
  return cleanedPath;
}



      
  
  goClassificationlist(){
    this.router.navigate(['/home_decideur/classifications']);
  }

  onSubmit(){  console.log(this.classification);
    console.log(this.donneParen);
    console.log(this.donnefil);

    if (this.donneParen == null && this.donnefil == null) {
      this.saveReClassification(); } 
      else if (this.donnefil != null&& this.donneParen != null) {
      this.classificationService.ajouterAffecterClassificationDonnesFilsetParent(this.classification, this.donnefil, this.donneParen)
          .subscribe(data => { console.log(data); this.goClassificationlist(); }, error => console.log(error));
     
    }
      else if (this.donneParen != null && this.donnefil == null) {
          this.classificationService.ajouterAffecterClassificationDonneeParent(this.classification, this.donneParen)
              .subscribe(data => { console.log(data); this.goClassificationlist(); }, error => console.log(error));
      } else if (this.donnefil != null && this.donneParen == null) {
          this.classificationService.ajouterAffecterClassificationDonnesFils(this.classification, this.donnefil)
              .subscribe(data => { console.log(data); this.goClassificationlist(); }, error => console.log(error));
      } 
      
  }
  // this.saveReClassification();
   
    
    
  
 
  private saveReClassification(){
    this.classificationService.createClassification(this.classification).subscribe(data=>{console.log(data);this.goClassificationlist();},error=>console.log(error));
    location.reload();

}
}
