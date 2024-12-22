import { Component, Inject, OnInit } from '@angular/core';
import { Classification } from '../classification';
import { ClassificationService } from '../classification.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DonneeParent } from '../donnee-parent';

@Component({
  selector: 'app-classificatio-non-affecter',
  templateUrl: './classificatio-non-affecter.component.html',
  styleUrls: ['./classificatio-non-affecter.component.css']
})
export class ClassificatioNonAffecterComponent  implements  OnInit{
   
  donneeParents: DonneeParent[] = [];
  classificationId: number;
  

  constructor(
    private classificationService: ClassificationService, public dialogRef: MatDialogRef<ClassificatioNonAffecterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
  ) {
    this.classificationId = data.classificationId;
    this.DonnParentParclassificationNull();
  }

  
  affecterClassificationToDonneParentt(donneeParentid:number): void { 
    console.log("test",this.classificationId,donneeParentid)
    this.classificationService.affecterClassificationToDonnePatrent(this.classificationId,donneeParentid).subscribe(
        data => {
            
            this.DonnParentParclassificationNull();
        },
        error => {
           
            console.error('Erreur  : ', error);
        }
    );
}
    
ngOnInit(): void {
    
}
closeDialog(): void {
  this.dialogRef.close();
}
   
  

  
  

  

  
 

  

  DonnParentParclassificationNull(): void {
    this.classificationService.getDonneParentClassificationNull().subscribe(
      data => {
        this.donneeParents= data;
      });}
     
       
    
     
 
  

 
}


