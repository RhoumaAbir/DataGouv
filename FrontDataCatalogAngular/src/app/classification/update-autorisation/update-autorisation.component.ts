import { Component, OnInit } from '@angular/core';
import { AutorisationService } from '../autorisation.service';import { ActivatedRoute, Router } from '@angular/router';
import { Autorisation } from '../autorisation';
import { MatDialogRef } from '@angular/material/dialog';  


@Component({
  selector: 'app-update-autorisation',
  templateUrl: './update-autorisation.component.html',
  styleUrls: ['./update-autorisation.component.css']
})
export class UpdateAutorisationComponent implements OnInit {
  id!:number;
  constructor(private autorisationService:AutorisationService,private router:Router,private route:ActivatedRoute){};
  autorisation: Autorisation = new Autorisation();
  ngOnInit(): void {
      
    this.id=this.route.snapshot.params['id'];
    this.autorisationService.getClassificationParId(this.id).subscribe(data =>{this.autorisation =<Autorisation>data;},error=>console.log(error));
    
    
    
      }
      onSubmit() {
        console.log(this.autorisation); 
      this.autorisationService.updateAutorisation(this.id, this.autorisation).subscribe(
          data => { this.goClassificationlist();},error => {console.error(error); });
      }
      
      goClassificationlist(){
        this.router.navigate(['/DashboardAdmin/autorisations']);
      }
     

}
