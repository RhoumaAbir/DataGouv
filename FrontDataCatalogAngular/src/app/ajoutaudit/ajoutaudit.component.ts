import { Component } from '@angular/core';
import { Risque,Etat } from '../core/models/audit';
import { ActivatedRoute, Router } from '@angular/router';
import { AuditeurService } from '../core/services/auditeur.service';


@Component({
  selector: 'app-ajoutaudit',
  templateUrl: './ajoutaudit.component.html',
  styleUrls: ['./ajoutaudit.component.css']
})
export class AjoutauditComponent {
  audit: any = { causeProbleme: '', fichierRapportAudit: "", comforme: "", etatAudit: "", alerteAudit: "",dateHeureAudit: new Date() }; // Assurez-vous que decideur est initialisé correctement
  risques = Object.values(Risque);
  etats = Object.values(Etat);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auditservice: AuditeurService) {
  
  }
  onSubmit() {
    console.log(this.audit)
   
    this.auditservice.save(this.audit).subscribe(()=>{
      
      this.router.navigate(['/home_auditeur/mes_audits']);

    },(err)=> {

      console.log(err)

    })
  }
  
}
