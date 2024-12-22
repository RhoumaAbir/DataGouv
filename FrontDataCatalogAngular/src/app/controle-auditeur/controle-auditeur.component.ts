import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { audit } from '../core/models/audit';

import * as XLSX from 'xlsx';
import { AuditeurService } from '../core/services/auditeur.service';
@Component({
  selector: 'app-controle-auditeur',
  templateUrl: './controle-auditeur.component.html',
  styleUrls: ['./controle-auditeur.component.css']
})
export class ControleAuditeurComponent implements OnInit {    
  title = 'Angular Search Using ng2-search-filter';
  searchText="";

  //déclaration pagination 
  p:number = 1 ; 
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [4, 8, 12, 16];
  contoleauditeur: audit[] = [];
  

  constructor(private auditeurservice: AuditeurService,private router:Router) { }
  ngOnInit(): void {
    this.loadControles();


  }

  loadControles():void {
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
      },
      error => console.error('Error deleting control', error)
    );
  }
  view(id : number){
    this.router.navigate(['/home_auditeur/viewaudit',id]);
  }
  update(id : number){
    this.router.navigate(['/home_auditeur/modifier',id]);
  }
  //Pagination 
  postList(): void {
    this.auditeurservice.getAll().subscribe((response) => {
      this.POSTS = response;
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
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.contoleauditeur);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'contoleauditeur');
    XLSX.writeFile(wb, 'Liste des contole auditeur.xlsx');
  }

  filtrerParNom(nomOrganisation: string) {
    // Appeler le service pour effectuer le filtrage par nom
    this.auditeurservice.filtrByNomOrg(nomOrganisation).subscribe(data => {
      // Gérer les données reçues du serveur
    });
  }
}
