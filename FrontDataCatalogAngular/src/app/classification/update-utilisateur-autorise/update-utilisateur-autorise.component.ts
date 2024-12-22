import { Component, OnInit } from '@angular/core';
import { UtilisateurAutoriseService } from '../utilisateur-autorise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurAutorise } from '../utilisateur-autorise';

@Component({
  selector: 'app-update-utilisateur-autorise',
  templateUrl: './update-utilisateur-autorise.component.html',
  styleUrls: ['./update-utilisateur-autorise.component.css']
})
export class UpdateUtilisateurAutoriseComponent implements OnInit {
  id!:number;
  constructor(private utilisateurAutoriseService:UtilisateurAutoriseService,private router:Router,private route:ActivatedRoute){};
  utilisateurAutorise: UtilisateurAutorise = new UtilisateurAutorise();
  ngOnInit(): void {
      
    this.id=this.route.snapshot.params['id'];
    this.utilisateurAutoriseService.getUtilisateurAutoriseParId(this.id).subscribe(data =>{this.utilisateurAutorise =<UtilisateurAutorise>data;},error=>console.log(error));
    
    
    
      }
      onSubmit() {
        console.log(this.utilisateurAutorise); 
      this.utilisateurAutoriseService.updateUtilisateurAutorise(this.id, this.utilisateurAutorise).subscribe(
          data => { this.goUtilisateurAutoriselist();},error => {console.error(error); });
      }
      
      goUtilisateurAutoriselist(){
        this.router.navigate(['/DashboardAdmin/utilisateurAutorises']);
      }
      

}


