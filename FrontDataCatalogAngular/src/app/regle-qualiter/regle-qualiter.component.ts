import {Component, OnInit} from '@angular/core';
import {MotCle} from "../core/entity/MotCle";
import {MotCleService} from "../core/service/mot-cle.service";
import {MatDialog} from "@angular/material/dialog";
import {PopUpAffectationComponent} from "../pop-up-affectation/pop-up-affectation.component";
import {PopUpModelDettailComponent} from "../pop-up-model-dettail/pop-up-model-dettail.component";
import {RegleQualite} from "../core/entity/RegleQualite";
import {RegleQualiteService} from "../core/service/regle-qualite.service";
import {PopUpRegleComponent} from "../pop-up-regle/pop-up-regle.component";

@Component({
  selector: 'app-regle-qualiter',
  templateUrl: './regle-qualiter.component.html',
  styleUrls: ['./regle-qualiter.component.css']
})
export class RegleQualiterComponent implements OnInit {


  regleQualites!: RegleQualite[];

  constructor(private regleQualite: RegleQualiteService ,public dialog: MatDialog) {
  }
  ngOnInit() {
    this.regleQualite.findAll().subscribe(data => {
      this.regleQualites = data;
    });}

  openDialog(param: any) {


      this.dialog.open(PopUpRegleComponent , {
        height: '500px',
        width: '800px',
        panelClass:'',
        data: { regle_id: param}
      });


    }










}
