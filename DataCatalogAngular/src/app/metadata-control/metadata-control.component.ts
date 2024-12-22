import { Component } from '@angular/core';
import { AuditeurService } from '../auditeur.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { audit } from 'src/app/core/models/audit';

@Component({
  selector: 'app-metadata-control',
  templateUrl: './metadata-control.component.html',
  styleUrls: ['./metadata-control.component.css']
})
export class MetadataControlComponent {
  contoleauditeur: any[] = [];
  // referenceAudit!:number;
  audit: any;
  title = 'Angular Search Using ng2-search-filter';
  searchText="";

  //déclaration pagination 
  p:number = 1 ; 
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [6, 12, 18, 24];
  constructor(private auditeurservice: AuditeurService,private route: ActivatedRoute,private router:Router) { }
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
    );}
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
  suivant(){
    this.router.navigate(['/DashboardAdmin/decideur']);
  }
}
