import { Component } from '@angular/core';
import { Risque, controle } from '../core/models//controle';
import { ActivatedRoute, Router } from '@angular/router';
import { DecideurService } from '../core/services/decideur.service';

@Component({
  selector: 'app-ajoutdecideur',
  templateUrl: './ajoutdecideur.component.html',
  styleUrls: ['./ajoutdecideur.component.css']
})
export class AjoutdecideurComponent {
  //decideur: controle = { dateHeureControle: new Date(), vulnerabilite:Risque.FAIBLE, rapportScanControle: "" };
  decideur: any = { vulnerabilite: "", rapportScanControle: "",dateHeureControle: new Date() }; // Assurez-vous que decideur est initialisé correctement
  risques = Object.values(Risque);
  contoledecideur: controle[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private decideurservice: DecideurService) {
  
  }

  onSubmit() {
    this.decideurservice.save(this.decideur).subscribe((data) => {
     this.router.navigate(['/home_decideur/gerer_mes_scans']);
    }, (err) => {
      console.log(err);
    });
  }
  } // Add this closing curly brace
