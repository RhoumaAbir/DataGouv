import { Component, Inject, OnInit } from '@angular/core';
import { Autorisation } from '../autorisation';
import { UtilisateurAutorise } from '../utilisateur-autorise';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AutorisationService } from '../autorisation.service';
import { UtilisateurAutoriseService } from '../utilisateur-autorise.service';
import { AutorisationNonAffecterComponent } from '../autorisation-non-affecter/autorisation-non-affecter.component';
import { UtilisateurNonAffecterComponent } from '../utilisateur-non-affecter/utilisateur-non-affecter.component';

@Component({
  selector: 'app-detail-autorisations',
  templateUrl: './detail-autorisations.component.html',
  styleUrls: ['./detail-autorisations.component.css']
})
export class DetailAutorisationsComponent implements OnInit {
  classificationId!: number;
  autorisations: Autorisation[] = [];
  utilisateursAutorises: UtilisateurAutorise[] = [];
  idAutorisation!: number;



  constructor(
    public dialogRef: MatDialogRef<DetailAutorisationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private autorisationService: AutorisationService,
    private utilisateurAutoriseService: UtilisateurAutoriseService,
    private dialog: MatDialog
   

  )
   { 
    this.idAutorisation=data.idAutorisation;
    this.classificationId = data.classificationId;
    this.AutorisationsParclassification(data.classificationId);
  }

  AutorisationsParclassification(classificationId: number): void {
    this.autorisationService.getAutorisationsByClassificationId(classificationId).subscribe(
      data => {
        this.autorisations = data;
      });}
      UtilisateursAutorisesParAutorisation(autorisationId: number): void {
        this.utilisateurAutoriseService.getUtilisateursAutorisesByAutorisationId(autorisationId).subscribe(data => {
          this.utilisateursAutorises = data;
        });

       }
       desaffecterClassification(autorisationId: number): void {
        this.autorisationService.desaffecteAutorisationClassification(autorisationId)
            .subscribe(
                (data) => {
                    
                   
                    location.reload();
             
                },
                (error) => {
                   
                    console.error('Erreur lors de la désaffectation de l\'autorisation : ', error);
                }
            );
    }
    AutorisationClassificationNullDialog(classificationId: number): void {
      console.log('Classification ID passed to dialog:', classificationId); // Vérifiez si classificationId est passé correctement
    
      const dialogRef = this.dialog.open(AutorisationNonAffecterComponent, {
        height: '550px',
        width: '700px',
        position: { top: '100px', left: '40%'},
        data: { classificationId: classificationId }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed with result:', result); // Vérifiez si le dialogue est fermé et s'il retourne des résultats
      });
    }

    UtilisateurAutoriseNullDialog(autorisationId: number): void {
      console.log('Classification ID passed to dialog:', autorisationId); // Vérifiez si classificationId est passé correctement
    
      const dialogRef = this.dialog.open(UtilisateurNonAffecterComponent, {
        height: '550px',
        width: '800px',
        position: { top: '0px', left: '40%'},
        data: { autorisationId: autorisationId } // Transmission des données supplémentaires
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed with result:', result); // Vérifiez si le dialogue est fermé et s'il retourne des résultats
      });
    }
    
    
    desaffecterutilisateur(idDonneeParent: number): void {
      console.log(this.classificationId,idDonneeParent);
      this.utilisateurAutoriseService.desaffecterClassificationId(idDonneeParent)
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


