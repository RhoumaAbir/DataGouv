import { Component ,OnInit} from '@angular/core';
import { controle } from '../core/models/controle';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { DecideurService } from '../core/services/decideur.service';
//import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-controle-decideur',
  templateUrl: './controle-decideur.component.html',
  styleUrls: ['./controle-decideur.component.css']
})
export class ControleDecideurComponent implements OnInit{
 
  nomOrganisation: string = ''; 
  title = 'Angular Search Using ng2-search-filter';
  searchText="";
  //déclaration pagination 
  p:number = 1 ; 
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [4, 8, 12, 16];
  contoledecideur: controle[] = [];


  constructor(private decideurservice: DecideurService,private router:Router) { }
  ngOnInit(): void {
    this.loadControles();

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
      },
      error => console.error('Error deleting control', error)
    );
  }
  getdecideurById(id: string) {
    this.decideurservice.getdecideurById(id).subscribe(
      data => {
        // Gérer la réponse de la requête
        console.log(data);
      },
      error => console.error('Error fetching control by ID', error)
    );
  }
  view(id : number){
    this.router.navigate(['/home_decideur/viewdecideur',id]);
  }
  update(id : number){
    this.router.navigate(['/home_decideur/modifier',id]);
  }

  //Pagination 
  postList(): void {
    this.decideurservice.getAll().subscribe((response) => {
      this.POSTS = response;
      console.log(this.POSTS);
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.postList();
  }
  
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();

  }
//excel
exportToExcel(): void {
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.contoledecideur);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'contoleauditeur');
  XLSX.writeFile(wb, 'Liste des contole auditeur.xlsx');
}


fetchAudits(nomOrganisation: string): void {
  this.decideurservice.getAuditsByOrganizationName(nomOrganisation)
    .subscribe(audits => {
      // Handle the response here
    }, error => {
      // Handle errors
    });
    
}

rechercherAuditsParNomOrganisation(): void {
  if (this.nomOrganisation.trim() !== '') {
    this.decideurservice.getAuditsByOrganizationName(this.nomOrganisation)
      .subscribe(decideur => {
        this.contoledecideur = decideur;
      });
  } else {
     this.nomOrganisation;
  }
}







}
