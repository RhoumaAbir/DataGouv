import { Component, Inject, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Autorisation } from '../autorisation';
import { AutorisationService } from '../autorisation.service';
import { CreateAutorisationComponent } from '../create-autorisation/create-autorisation.component';

@Component({
  selector: 'app-autorisation-non-affecter',
  templateUrl: './autorisation-non-affecter.component.html',
  styleUrls: ['./autorisation-non-affecter.component.css']
})
export class AutorisationNonAffecterComponent implements OnInit {
  autorisations: Autorisation[] = [];
  classificationId: number;
  

  constructor(
    private autorisationService: AutorisationService, public dialogRef: MatDialogRef<AutorisationNonAffecterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.classificationId = data.classificationId;
    this.AutorisationsParclassificationNull();
  }

  
  affecterAutorisationToClassification(autorisationId:number): void {
    this.autorisationService.affecterAutorisationToClassification(this.classificationId, autorisationId).subscribe(
        data => {
            
            this.AutorisationsParclassificationNull();
            location.reload();
        },
        error => {
           
            console.error('Erreur lors de l\'affectation de l\'autorisation à la classification : ', error);
        }
    );
}
    
ngOnInit(): void {
    
}
   
  

  
  

  

  
 

  

  AutorisationsParclassificationNull(): void {
    this.autorisationService.getAutorisationCalssificationNull().subscribe(
      data => {
        this.autorisations = data;
      });}
     
       
    
     
 
  

 
}

