import {Component, Inject, OnInit} from '@angular/core';
import {MotCle} from "../core/entity/MotCle";
import {MotCleService} from "../core/service/mot-cle.service";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {DonneFils} from "../core/entity/DonneFils";
import {AffectationRequest} from "../core/entity/AffectationRequest";


@Component({
  selector: 'app-pop-up-affectation',
  templateUrl: './pop-up-affectation.component.html',
  styleUrls: ['./pop-up-affectation.component.css']
})
export class PopUpAffectationComponent implements OnInit {


  donneFils!: DonneFils[];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private motCleService: MotCleService) {


  }
  affecterDonneMotCle( request: AffectationRequest, idMotCle: number): void {
    this.motCleService.affecterDonneMotCle( request , idMotCle).subscribe(

    );
  }



  ngOnInit() {
    this.motCleService.findAllDonnerEntrprise().subscribe(data => {
      this.donneFils = data;
    });
  }
  getCheckedIds() {
    const checkedIds = this.donneFils.filter(item => item.checked).map(item => item.idDonneeFils);
    console.log('Checked IDs:', checkedIds);
    let request!: AffectationRequest;
    request = new AffectationRequest();
    console.log('id ',this.data.motId)
    request.id_Donnes =checkedIds;
    console.log('requestcbady ',request)
    this.affecterDonneMotCle(request,this.data.motId);
  }


}
