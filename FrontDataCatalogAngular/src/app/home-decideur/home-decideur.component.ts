import { Component, OnInit } from '@angular/core';
//import { DecideurService } from '../decideur.service';

@Component({
  selector: 'app-home-decideur',
  templateUrl: './home-decideur.component.html',
  styleUrls: ['./home-decideur.component.css']
})
export class HomeDecideurComponent implements OnInit {
  //contoledecideur: any[] = [];

  //constructor(private decideurservice: DecideurService) { }

  ngOnInit(): void {
    //this.loadDecideur();
  }

  //loadDecideur() {
   // this.decideurservice.getAll().subscribe(
    //  data => {this.contoledecideur = data},
      //error => console.error('Error fetching demandes', error)
     // );
 // }


}
