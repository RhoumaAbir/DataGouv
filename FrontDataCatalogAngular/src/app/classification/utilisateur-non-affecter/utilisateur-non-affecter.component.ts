import { Component, Inject, OnInit } from '@angular/core';
import { UtilisateurAutorise } from '../utilisateur-autorise';
import { UtilisateurAutoriseService } from '../utilisateur-autorise.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, RouterPreloader } from '@angular/router';

@Component({
  selector: 'app-utilisateur-non-affecter',
  templateUrl: './utilisateur-non-affecter.component.html',
  styleUrls: ['./utilisateur-non-affecter.component.css']
})
export class UtilisateurNonAffecterComponent implements OnInit {
  
  utilisateurAutorises: UtilisateurAutorise[] = [];
  autorisationId: number;
  

  constructor(
    private utilisateurAutoriseService: UtilisateurAutoriseService, public dialogRef: MatDialogRef<UtilisateurNonAffecterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   
  ) {
    this.autorisationId = data.autorisationId;
    this.AutorisationsParclassificationNull();
  }

  
  affecterUtilisateurToAutorisation(utilisateurAutorise:number): void { 
    console.log("test",this.autorisationId)
    this.utilisateurAutoriseService.affecterUtilisateurToAutorisation(this.autorisationId,utilisateurAutorise).subscribe(
        data => {
          location.reload();
            this.AutorisationsParclassificationNull();
          
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
   
  

  
  

  

  
 

  

  AutorisationsParclassificationNull(): void {
    this.utilisateurAutoriseService.getUtilisateurAutorisesByAutorisationNul().subscribe(
      data => {
        this.utilisateurAutorises = data;
      });}
     
       
    
     
 
  

 
}


