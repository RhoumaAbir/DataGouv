import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuditeurService } from '../auditeur.service';
import { Risque,Etat } from '../core/models/audit';
import { audit } from '../core/models/audit';

@Component({
  selector: 'app-modifieraudit',
  templateUrl: './modifieraudit.component.html',
  styleUrls: ['./modifieraudit.component.css']
})
export class ModifierauditComponent  {

  contoleauditeur: audit[] = [];
  referenceAudit!:number;
  audit: any;
  risques = Object.values(Risque);
  etats = Object.values(Etat);
  
  constructor(private auditService:AuditeurService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
      
    this.referenceAudit=this.route.snapshot.params['referenceAudit'];
    this.auditService.getauditById(this.referenceAudit).subscribe(
      (data) => {
        this.audit = data;
        console.log("",this.audit)
      },
      (error) => {
        console.log(error);
      }
    );
    
    
      }
      onSubmit() {
        console.log(this.audit); 
      this.auditService.updateAudit(this.referenceAudit).subscribe(
          data => { this.goauditlist();},error => {console.error(error); });
      }
      
      goauditlist(){
        this.router.navigate(['/home_auditeur']);
      }
      update(id : number){
        this.router.navigate(['/home_auditeur/mes_audits']);
      }
}
