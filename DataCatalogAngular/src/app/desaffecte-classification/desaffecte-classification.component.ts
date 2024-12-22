import { Component, Inject } from '@angular/core';
import { DonneeParent } from '../donnee-parent';
import { ClassificationService } from '../classification.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ClassificatioNonAffecterComponent } from '../classificatio-non-affecter/classificatio-non-affecter.component';

@Component({
  selector: 'app-desaffecte-classification',
  templateUrl: './desaffecte-classification.component.html',
  styleUrls: ['./desaffecte-classification.component.css']
})
export class DesaffecteClassificationComponent {
  DonneeParents: DonneeParent[] = [];
  classificationId: number;
  

  constructor(
    private classificationService: ClassificationService, public dialogRef: MatDialogRef<DesaffecteClassificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog
  ) {
    this.classificationId = data.classificationId;
    this.getDonneParentClassificationId(data.classificationId);
  }

  getDonneParentClassificationId(classificationId: number): void {
    this.classificationService.getDonneParentClassificationId(classificationId).subscribe(
      data => {
        this.DonneeParents = data;
      });}

       
      desaffecterClassification(idDonneeParent: number): void {
        console.log(this.classificationId,idDonneeParent);
        this.classificationService.desaffecterClassificationId(this.classificationId,idDonneeParent)
            .subscribe(
                (data) => {
                    
                  location.reload();
                    
             
                },
                (error) => {
                   
                    console.error('Erreur lors de la désaffectation de l\'autorisation : ', error);
                }
            );
              }
           
    
ngOnInit(): void {
    
}
   
  

  
  

  

  
 

  

  
       
    
     
 
  

 




}
