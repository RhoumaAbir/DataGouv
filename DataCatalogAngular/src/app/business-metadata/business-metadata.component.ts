import {Component, forwardRef, Injectable, OnInit} from '@angular/core';
import {Mot_Cle} from "../../Model/Mot_Cle";
import {MotCleService} from "../../Service/mot-cle.service";

import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-business-metadata',
  templateUrl: './business-metadata.component.html',
  styleUrls: ['./business-metadata.component.css']
})

export class BusinessMetadataComponent implements OnInit{
  public motCles!:Mot_Cle[];
  constructor(private motCleService : MotCleService) {
  }
  public getMotCle() : void {
    this.motCleService.getEtudiant().subscribe((responce : Mot_Cle[])=>{this.motCles = responce;})
  }

  ngOnInit(): void { this.getMotCle();
  }

}
