import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MotCleService} from "../core/service/mot-cle.service";
import {DonneFils} from "../core/entity/DonneFils";
import {RegleQualiteService} from "../core/service/regle-qualite.service";
import {RegleQualite} from "../core/entity/RegleQualite";

@Component({
  selector: 'app-pop-up-model-dettail',
  templateUrl: './pop-up-model-dettail.component.html',
  styleUrls: ['./pop-up-model-dettail.component.css']
})
export class PopUpModelDettailComponent implements OnInit{
  donneFils!: DonneFils[];
  regleQualites !: RegleQualite[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private motCleService: MotCleService , private regleQualiteService:RegleQualiteService) {

  }
  ngOnInit() {
    this.motCleService.findAllDonnerEntrprise_Mot(this.data.motId).subscribe(data => {
      this.donneFils = data;
    });

    this.regleQualiteService.findAllbymotcle(this.data.motId).subscribe(data => {
      this.regleQualites = data;
    });


  }

}
