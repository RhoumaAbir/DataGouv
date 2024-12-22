import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { DecideurService } from 'src/app/decideur.service';
@Component({
  selector: 'app-controle-decideur',
  templateUrl: './controle-decideur.component.html',
  styleUrls: ['./controle-decideur.component.css']
})
export class ControleDecideurComponent {
  title = 'Angular Search Using ng2-search-filter';
  searchText="";
 //déclaration pagination 
 p:number = 1 ; 
 POSTS: any;
 page: number = 1;
 count: number = 0;
 tableSize: number = 6;
 tableSizes: any = [6, 12, 18, 24];
  contoledecideur: any[] = [];
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
}
