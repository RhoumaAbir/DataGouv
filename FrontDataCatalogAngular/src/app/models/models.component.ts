import {Component, OnInit} from '@angular/core';
import {MotCle} from "../core/entity/MotCle";
import {MotCleService} from "../core/service/mot-cle.service";

import {PopUpAffectationComponent} from "../pop-up-affectation/pop-up-affectation.component";
import {MatDialog} from "@angular/material/dialog";
import {PopUpModelDettailComponent} from "../pop-up-model-dettail/pop-up-model-dettail.component";

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText="";

  //déclaration pagination
  p:number = 1 ;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [6,8, 12, 16];

  motCle!: MotCle[];

  constructor(private motCleService: MotCleService,public dialog: MatDialog) {
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


  ngOnInit() {
    this.motCleService.findAll().subscribe(data => {
      this.motCle = data;
    });
  }

  openDialog(param: any) {


    this.dialog.open(PopUpAffectationComponent , {
      height: '500px',
      width: '800px',
      panelClass:'',
      data: { motId: param}
    });


  }
  openDialogdet(id: any,nom: any) {


    this.dialog.open(PopUpModelDettailComponent , {
      height: '500px',
      width: '900px',
      panelClass:'',
      data: { motId: id, nom :nom}

    });


  }
}
