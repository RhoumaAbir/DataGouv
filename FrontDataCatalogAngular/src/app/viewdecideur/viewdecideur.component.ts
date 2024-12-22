import { Component, OnInit } from '@angular/core';
import { DecideurService } from '../decideur.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { controle } from '../core/models/controle';
@Component({
  selector: 'app-viewdecideur',
  templateUrl: './viewdecideur.component.html',
  styleUrls: ['./viewdecideur.component.css']
})
export class ViewdecideurComponent {
  contoledecideur: controle[] = [];
  referenceControle!:number;
  cont: any;
  
  constructor(private route: ActivatedRoute,private decideurservice: DecideurService,private router:Router) {
     }
  ngOnInit(): void {
  this.loadControle();
  }
     


  loadControle(): void {
    const referenceControle = this.route.snapshot.params['referenceControle'];
    this.decideurservice.getdecideurById(referenceControle).subscribe(
      (data) => {
        this.cont = data;
        console.log("",this.cont)
      },
      (error) => {
        console.log(error);
      }
    );
  }
 getdecideurById(id: string) {
    this.decideurservice.getdecideurById(id).subscribe(
      data => {
        // Gérer la réponse de la requête
        console.log(data);
        this.loadControles();
      },
      error => console.error('Error fetching control by ID', error)
    );
  }

  loadControles():void {
    this.decideurservice.getAll().subscribe(
      data => this.contoledecideur = data,
      error => console.error('Error fetching controls', error)
    );
  }

  deleteControle(id: number) {
    this.decideurservice.delete(id).subscribe(
      () => {
        console.log('Control deleted successfully');
        this.loadControles(); // Refresh the list after deletion
        this.router.navigate(['/home_decideur/gerer_mes_scans']);
      },
      error => console.error('Error deleting control', error)
    );
  }
  update(id : number){
    this.router.navigate(['/home_decideur/modifier',id]);
  }
 
}
