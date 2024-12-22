import {Component, Inject, OnInit} from '@angular/core';
import {DonneFils} from "../core/entity/DonneFils";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MotCleService} from "../core/service/mot-cle.service";
import {AffectationRequest} from "../core/entity/AffectationRequest";
import {RegleQualiteService} from "../core/service/regle-qualite.service";
import {RegleQualite} from "../core/entity/RegleQualite";
import {MotCle} from "../core/entity/MotCle";
import {filter} from "rxjs";

@Component({
  selector: 'app-pop-up-regle',
  templateUrl: './pop-up-regle.component.html',
  styleUrls: ['./pop-up-regle.component.css']
})
export class PopUpRegleComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText="";

  //déclaration pagination
  p:number = 1 ;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 4;
  tableSizes: any = [4,8, 12, 16];


  motCles!: MotCle[];
  filteredMotCles:  MotCle[] = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private motCleService: MotCleService,private regleQualiteService:RegleQualiteService) {
  }
  postList(): void {
    this.motCleService.findAll().subscribe((response) => {
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
  affecterRequelMot( request: AffectationRequest, idRegle: number): void {
    this.regleQualiteService.affecterRegleMot( request , idRegle).subscribe(

    );
  }
  ngOnInit() {
    this.motCleService.findAll().subscribe(data => {
      this.motCles = data;
    });
    this.filteredMotCles = this.motCles;
  }
  getCheckedIds() {
    const checkedIds = this.motCles.filter(item => item.checked).map(item => item.idMotCle);
    console.log('Checked IDs:', checkedIds);
    let request!: AffectationRequest;
    request = new AffectationRequest();
    console.log('id ',this.data.regle_id)
    request.id_Donnes =checkedIds;
    console.log('requestcbady ',request)
     this.affecterRequelMot(request,this.data.regle_id);
  }




}
