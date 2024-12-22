import { Component, OnInit } from '@angular/core';
import { AutorisationService } from '../autorisation.service';
import { Autorisation } from '../autorisation';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Classification } from '../classification';
import { ClassificationService } from '../classification.service';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilisateurConnecteService } from '../core/services/services_utilisateur/utilisateur-connecte.service';
@Component({
  selector: 'app-create-autorisation',
  templateUrl: './create-autorisation.component.html',
  styleUrls: ['./create-autorisation.component.css']
})

export class CreateAutorisationComponent implements OnInit {
  classifications: Classification[] = []



  creationEnabled: boolean = false;
  ClassificationValue() {
    if (this.creationEnabled) {

      this.autorisation.classification = 0;
    }
  }

  classificationrows = [
    this.getClassificationslist()

  ];
  constructor(private autorisationService: AutorisationService, private classificationService: ClassificationService, private router: Router) { };
  //public dialogRef: MatDialogRef<CreateAutorisationComponent>
  autorisation: Autorisation = new Autorisation();
  ngOnInit(): void {


  }
  getClassificationslist() {
    this.classificationService.getClassificationlist().subscribe(data => this.classifications = data);

  }
  goAutorisationlist() {
    this.router.navigate(['/DashboardAdmin/autorisations']);
  }

  onSubmit() {
    console.log(this.autorisation);
    this.saveAutorisation();

  }
  private saveAutorisation() {
    this.autorisationService.cerateAffecterAutorisation(this.autorisation.classification, this.autorisation).subscribe(data => { console.log(data); this.goAutorisationlist(); }, error => console.log(error));


  }
  //closeDialog(): void {
  // this.dialogRef.close();
  //}


}
