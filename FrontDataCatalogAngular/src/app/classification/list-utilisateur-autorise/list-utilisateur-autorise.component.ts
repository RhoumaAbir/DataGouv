import { Component, OnInit } from '@angular/core';
import { UtilisateurAutorise } from '../utilisateur-autorise';
import { UtilisateurAutoriseService } from '../utilisateur-autorise.service';
import { Router } from '@angular/router';
import { CreateUtilisateurAutoriseComponent } from '../create-utilisateur-autorise/create-utilisateur-autorise.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-utilisateur-autorise',
  templateUrl: './list-utilisateur-autorise.component.html',
  styleUrls: ['./list-utilisateur-autorise.component.css']
})
export class ListUtilisateurAutoriseComponent  implements OnInit {
  utilisateurAutorises:UtilisateurAutorise []=[]



constructor(private utilisateurAutoriseService:UtilisateurAutoriseService, private router:Router,private dialog: MatDialog) {}

openAddUtilisateurAutoriseDialog(): void {
  const dialogRef = this.dialog.open(CreateUtilisateurAutoriseComponent, {
    height: '440px',
width: '550px',

   
    position: { top: '100px', left: '40%'}, 
    
    
  });

  dialogRef.afterClosed().subscribe(result => {
    this.getUtilisateurAutoriseServicelist()
    
    
  });
}


ngOnInit() {this.getUtilisateurAutoriseServicelist()

    
}
private getUtilisateurAutoriseServicelist(){
  this.utilisateurAutoriseService.getUtilisateurAutoriselist().subscribe(data => this.utilisateurAutorises = data);
  
}
 delete_utilisateurAutorise(id:number){
  this.utilisateurAutoriseService.deleteUtilisateurAutorise(id).subscribe(data=>{console.log(data);this.getUtilisateurAutoriseServicelist();},error => {console.error(error); });
  
}
update_utilisateurAutorise(id : number){
  this.router.navigate(['/home_decideur/update-utilisateurAutorise',id]);
}




}
