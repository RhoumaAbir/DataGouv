import { Component, OnInit } from '@angular/core';
import { UtilisateurAutoriseService } from '../utilisateur-autorise.service';
import { Router } from '@angular/router';
import { UtilisateurAutorise } from '../utilisateur-autorise';
import { Autorisation } from '../autorisation';
import { AutorisationService } from '../autorisation.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-utilisateur-autorise',
  templateUrl: './create-utilisateur-autorise.component.html',
  styleUrls: ['./create-utilisateur-autorise.component.css']
})
export class CreateUtilisateurAutoriseComponent implements OnInit {
  autorisations:Autorisation []=[]

  autorisationrows = [
    this.listAutorisations()
   
  ];
  creationEnabled: boolean = true;
  AutorisationValue() {
    if (!this.creationEnabled) {
     
      this.utilisateurAutorise.autorisation= 0; 
    }
  }
  constructor(private utilisateurAutoriseService:UtilisateurAutoriseService,private router:Router,private autorisationService:AutorisationService){};
  //,public dialogRef: MatDialogRef<CreateUtilisateurAutoriseComponent>
  utilisateurAutorise:UtilisateurAutorise=new UtilisateurAutorise()
 
  ngOnInit(): void {
      
  }
  goUtilisateurAutoriselist(){
    this.router.navigate(['/home_decideur/les_utilisateurAutorises']);
  } 

  onSubmit(){  console.log(this.utilisateurAutorise);
    this.saveUtilisateurAutorise();
    

    
  }
  private saveUtilisateurAutorise(){
    this.utilisateurAutoriseService.ajouterAffecterUtilisateurAutorise(this.utilisateurAutorise.autorisation,this.utilisateurAutorise).subscribe(data=>{console.log(data);this.goUtilisateurAutoriselist();},error=>console.log(error));
    location.reload();

}
listAutorisations(){
  this.autorisationService.getAutorisationlist().subscribe(data => this.autorisations = data)
}
//closeDialog(): void {
 // this.dialogRef.close();
//}

}
