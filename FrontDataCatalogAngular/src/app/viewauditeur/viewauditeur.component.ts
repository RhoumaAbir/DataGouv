import { Component } from '@angular/core';
import { AuditeurService } from '../auditeur.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { audit } from '../core/models/audit';
@Component({
  selector: 'app-viewauditeur',
  templateUrl: './viewauditeur.component.html',
  styleUrls: ['./viewauditeur.component.css']
})
export class ViewauditeurComponent {
  contoleauditeur: audit[] = [];
  referenceAudit!:number;
  audit: any;
  constructor(private auditeurservice: AuditeurService,private route: ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.loadControles();
  }
  loadControles(): void {
    const referenceAudit = this.route.snapshot.params['referenceAudit'];
    this.auditeurservice.getauditById(referenceAudit).subscribe(
      (data) => {
        this.audit = data;
        console.log("",this.audit)
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getauditById(id: number) {
    this.auditeurservice.getauditById(id).subscribe(
      data => {
        // Gérer la réponse de la requête
        console.log(data);
        this.loadControles();
      },
      error => console.error('Error fetching control by ID', error)
    );
  }

  loadControle():void {
    this.auditeurservice.getAll().subscribe(
      data => this.contoleauditeur = data,
      error => console.error('Error fetching controls', error)
    );
  }

  delete(id: number) {
    this.auditeurservice.delete(id).subscribe(
      () => {
        console.log('Control deleted successfully');
        this.loadControles(); // Refresh the list after deletion
        this.router.navigate(['/home_auditeur/mes_audits']);

      },
      error => console.error('Error deleting control', error)
    );
  }
  update(id : number){
    this.router.navigate(['/home_auditeur/modifier',id]);
  }
}
