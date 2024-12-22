import {Component, OnInit} from '@angular/core';
import {MotCleService} from "../core/service/mot-cle.service";
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {MotCle} from "../core/entity/MotCle";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-mot-cle',
  templateUrl: './add-mot-cle.component.html',
  styleUrls: ['./add-mot-cle.component.css']
})
export class AddMotCleComponent  {
  motCle: MotCle;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private motCleService:MotCleService) {
    this.motCle = new MotCle();
  }

  onSubmit() {
    this.motCleService.save(this.motCle).subscribe(data=>{console.log(data)});
  }



}
