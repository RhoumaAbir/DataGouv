import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../reclamation';
import{ReclamationService}from'../reclamation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {
  reclamations:Reclamation[]=[]
  constructor(private reclamationService:ReclamationService,private router:Router){}
ngOnInit(): void {
 /* this.reclamations=[
    {
      "id_Reclamation": 1,
      "nom_Acteur": "mahdi",
      "cin_Acteur": "14656448",
      "message_Reclamation": "il faut couriger erure",
      "date_Reclamation": new Date(),
      "typeReclamation": "violence_de_donner"
    },
    {
      "id_Reclamation": 2,
      "nom_Acteur": "mahdi",
      "cin_Acteur": "14656448",
      "message_Reclamation": "il faut couriger erure",
      "date_Reclamation": new Date(),
      "typeReclamation": "violence_de_donner"
    }
  ]*/
  this.getrclamationlist();

}
  private getrclamationlist() {
    this.reclamationService.getrclamationlist().subscribe(data =>{this.reclamations=data;})
    
  }
  update_reclamation(id : number){
    this.router.navigate(['update-reclamation',id]);
  }
  delete_reclamation(id : number){
    this.reclamationService.deleteReclmamation(id).subscribe( data => {console.log(data);
      this.getrclamationlist();},error => {console.error(error); });
  }
    
}


