import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Classification } from '../classification';
import { ClassificationService } from '../classification.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-classification',
  templateUrl: './update-classification.component.html',
  styleUrls: ['./update-classification.component.css']
})
export class UpdateClassificationComponent implements OnInit {
  descriptionClassification: any;
  id!:number;
  constructor(private ClassificationService:ClassificationService,private router:Router,private route:ActivatedRoute,private  formBuilder: FormBuilder){};
  classification: Classification = new Classification();
  ngOnInit(): void {
      
    this.id=this.route.snapshot.params['id'];
    this.ClassificationService.getClassificationParId(this.id).subscribe(data =>{this.classification =<Classification>data;},error=>console.log(error));
    
    }
      onSubmit() {
        console.log(this.classification); 
      this.ClassificationService.updateClassification(this.id, this.classification).subscribe(
          data => { this.goClassificationlist();},error => {console.error(error); });
      }
      
      goClassificationlist(){
        this.router.navigate(['/home_decideur/classifications']);
      }
      
      onUploadFiles(event: any):void {
        const files = event.target.files;
        if (files.length > 0) {
 
        this.classification.fichierPreuveClassification = this.cleanPath(files[0].name);
        }
      }
      
      cleanPath(filePath: string): string {
      
        const cleanedPath = filePath.replace(/[^\w\s.-]/gi, '');
        return cleanedPath;
      }

    

}
