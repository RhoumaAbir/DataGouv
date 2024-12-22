import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { audit } from '../core/models/audit';
import { AuditeurService } from '../core/services/auditeur.service';
@Component({
  selector: 'app-affichage-controle-auditeur',
  templateUrl: './affichage-controle-auditeur.component.html',
  styleUrls: ['./affichage-controle-auditeur.component.css']
})
export class AffichageControleAuditeurComponent {
  contoleauditeur: audit[] = [];
  constructor(private auditeurservice: AuditeurService ,private router:Router) { }
  ngOnInit(): void {
    this.loadControles();
  }

  loadControles():void {
    this.auditeurservice.getAll().subscribe(
      data => this.contoleauditeur = data,
      error => console.error('Error fetching controls', error)
    );
  }

  deleteControle(referenceAudit: number) {
    this.auditeurservice.delete(referenceAudit).subscribe(
      () => {
        console.log('Control deleted successfully');
        this.loadControles(); // Refresh the list after deletion
      },
      error => console.error('Error deleting control', error)
    );
  }
  view(referenceAudit : number){
    this.router.navigate(['/home_decideur/viewauditdecideur',referenceAudit]);
  }
}
