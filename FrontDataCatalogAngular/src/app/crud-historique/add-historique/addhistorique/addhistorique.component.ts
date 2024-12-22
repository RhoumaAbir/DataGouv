import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { HistoriqueService } from 'src/app/services/historique.service';
import { Historique } from '../../../model/historique';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DonneeParent } from '../../../model/DonneeParent';
import { UtilDonne } from 'src/app/model/UtilDonne';
@Component({
  selector: 'app-addhistorique',
  templateUrl: './addhistorique.component.html',
  styleUrls: ['./addhistorique.component.css']
})
export class AddhistoriqueComponent implements OnInit {
  historiqueForm!: FormGroup;
  nom_technique_parents: string[] = [];
  donneeParents: DonneeParent[] = [];
  users: UtilDonne[] = [];
  constructor(private formBuilder: FormBuilder, 
    private historiqueService: HistoriqueService, 
    private router: Router,private cdr: ChangeDetectorRef) {} 

  ngOnInit() {
    this.initForm();
    this.loadNomTechniqueParents();
    this.loadUserDataMatricule();
  }

  initForm() {
    this.historiqueForm = this.formBuilder.group({
      dateOperation: ['', Validators.required],
      matriculeUtilisateur: ['', Validators.required],
      typeOperation: ['CREATION', Validators.required],
      details: ['', Validators.required],
      nomTechniqueParent: ['', Validators.required], // Add the form control for NomTechniqueParent
      idDonneeParent: null 
    });
  }

  onSubmit() {
    if (this.historiqueForm.valid) {
      const newHistory = this.historiqueForm.value;
     /* console.log('idUser', newHistory.matriculeUtilisateur)
      this.historiqueService.getUtilisateurDonnes(newHistory.matriculeUtilisateur).subscribe((id)=>{
        console.log('idUser', id)
        console.log("Historique", newHistory)

        newHistory["utilisateurDonne"]=id.idUtilDonne
        newHistory["matriculeUtilisateur"]=id.matriculeUtilisateur
      },
      (error) => {
        console.error('Error getting id:', error);
        alert('Failed to get id. Check console for details.');
      }
      )*/
      this.historiqueService.getIdTechniqueParent(newHistory.nomTechniqueParent).subscribe((id)=>{
       
        newHistory["idDonneeParent"]=id
        //newHistory.idDonneeParent = selectedDonneeParent ? selectedDonneeParent.idDonneeParent : null;
        console.log("Historique", newHistory)
      },
      (error) => {
        console.error('Error getting id:', error);
        alert('Failed to get id. Check console for details.');
      })

      /* Set the idDonneeParent in the new history
      newHistory.idDonneeParent = selectedDonneeParent ? selectedDonneeParent.idDonneeParent : null;
  */
      // Add the history
      this.historiqueService.addHistorique(newHistory).subscribe(
        (addedHistory) => {
          alert('History added successfully!');
          // You can perform additional actions if needed
        },
        (error) => {
          console.error('Error adding history:', error);
          alert('Failed to add history. Check console for details.');
        }
      );
    } else {
      console.error('Form is invalid. Cannot submit.');
      // After successfully adding, navigate back to /home_decideur/historique
      this.router.navigate(['/home_decideur/historique']);
    }
  }
  
  loadNomTechniqueParents() {
    this.historiqueService.getAllNomTechniqueParents().subscribe(
      (nom_technique_parents) => {
        console.log('NomTechniqueParents:', nom_technique_parents);
        this.nom_technique_parents = nom_technique_parents;
        this.cdr.detectChanges(); // Trigger change detection to update the view
      },
      (error) => {
        console.error('Error fetching NomTechniqueParents:', error);
      }
    );
  }
  loadUserDataMatricule() {
    this.historiqueService.getAllUtilisateurDonnes().subscribe(
      (users) => {
        console.log('users:', users);
        this.users = users
        /*.map((u)=>{
          console.log("u", u)
          return u.matriculeUtilisateur
        });*/
        console.log("users", users)

        this.cdr.detectChanges(); // Trigger change detection to update the view
      },
      (error) => {
        console.error('Error fetching NomTechniqueParents:', error);
      }
    );
  }
  
  
  goToHomePage() {
    // Navigate to the home page
    this.router.navigate(['/home_decideur/historique']);
  }
  
}