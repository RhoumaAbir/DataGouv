import { Component, OnInit } from '@angular/core';
import { Classification } from '../classification';
import { ClassificationService } from '../classification.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetailAutorisationsComponent } from '../detail-autorisations/detail-autorisations.component';
import { CreateClassificationComponent } from '../create-classification/create-classification.component';
import { DesaffecteClassificationComponent } from '../desaffecte-classification/desaffecte-classification.component';
import { ClassificatioNonAffecterComponent } from '../classificatio-non-affecter/classificatio-non-affecter.component';



@Component({
  selector: 'app-list-classification',
  templateUrl: './list-classification.component.html',
  styleUrls: ['./list-classification.component.css']
})
export class ListClassificationComponent implements OnInit {
  classifications:Classification []=[]



constructor(private classificationService:ClassificationService, private router:Router,private dialog: MatDialog) {}


ngOnInit() {this.getClassificationslist()

    
}



CreateClassification(): void {
  const dialogRef = this.dialog.open(CreateClassificationComponent, {
    height: '700px',
width: '600px',

   
    position: { top: '00px', left: '40%'}, 
    
    
  });
  

  dialogRef.afterClosed().subscribe(result => {
    this.getClassificationslist()
    
    
  });
}
openDonneParentClassificationId(classificationId: number): void {
  const dialogRef = this.dialog.open(DesaffecteClassificationComponent, {
      width: '700px',
      height: '700px',
      data: { classificationId: classificationId }
  });
}

openDetailsPopup(classificationId: number): void {
  const dialogRef = this.dialog.open(DetailAutorisationsComponent, {
      width: '600px',
      height: '700px',
      data: { classificationId: classificationId }
  });
}

private getClassificationslist(){
  this.classificationService.getClassificationlist().subscribe(data => this.classifications = data);
  
}

 delete_Classification(id:number){
  this.classificationService.deleteClassification(id).subscribe(data=>{console.log(data);this.getClassificationslist();},error => {console.error(error); });
  
}
update_Classification(id : number){
  this.router.navigate(['/DashboardAdmin/update-classification',id]);
}
telecharger(file1:string){
  this.classificationService.telecharger_fichier(file1).subscribe(data=>{console.log(data);this.getClassificationslist();},error => {console.error(error); })
}
ClassificationNullDialog(classificationId: number): void {
  console.log('Classification ID passed to dialog:', classificationId); // Vérifiez si classificationId est passé correctement

  const dialogRef = this.dialog.open(ClassificatioNonAffecterComponent, {
    height: '550px',
    width: '800px',
    position: { top: '0px', left: '40%'},
    data: { classificationId: classificationId } // Transmission des données supplémentaires
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed with result:', result); // Vérifiez si le dialogue est fermé et s'il retourne des résultats
  });
}

}
