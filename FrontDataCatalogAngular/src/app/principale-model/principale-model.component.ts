import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";

@Component({
  selector: 'app-principale-model',
  templateUrl: './principale-model.component.html',
  styleUrls: ['./principale-model.component.css']
})
export class PrincipaleModelComponent {
  constructor(private matIcon : MatIconRegistry) {
    this.matIcon.addSvgIcon("car ","src/assets/images/career.svg");
  }

}
