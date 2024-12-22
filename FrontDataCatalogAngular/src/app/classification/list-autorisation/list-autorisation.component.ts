import { Component, OnInit } from '@angular/core';
import { Autorisation } from '../autorisation';
import { AutorisationService } from '../autorisation.service';
import { Router } from '@angular/router';
import { CreateAutorisationComponent } from '../create-autorisation/create-autorisation.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAutorisationComponent } from '../update-autorisation/update-autorisation.component';



@Component({
  selector: 'app-list-autorisation',
  templateUrl: './list-autorisation.component.html',
  styleUrls: ['./list-autorisation.component.css']
})
export class ListAutorisationComponent implements OnInit {
  autorisations: Autorisation[] = [];

  constructor(
    private autorisationService: AutorisationService,
    private router: Router,
    private dialog: MatDialog
    
  ) {}

  openAddAutorisationDialog(): void {
    const dialogRef = this.dialog.open(CreateAutorisationComponent, {
      height: '450px',
  width: '600px',
  
     
      position: { top: '100px', left: '40%'}, 
      
      
    });
    

    dialogRef.afterClosed().subscribe(result => {
      this.getAutorisationlistslist()
      
      
    });
  }
  

  ngOnInit() {
    this.getAutorisationlistslist();
  }

  private getAutorisationlistslist() {
    this.autorisationService.getAutorisationlist().subscribe(data => this.autorisations = data);
  }

  delete_autorisation(id: number) {
    this.autorisationService.deleteAutorisation(id).subscribe(
      data => {
        console.log(data);
        this.getAutorisationlistslist();
      },
      error => {
        console.error(error);
      }
    );
  }

  update_autorisation(id: number) {
    this.router.navigate(['/home_decideur/update-autorisation', id]);
   
  }
}
