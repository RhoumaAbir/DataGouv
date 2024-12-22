import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Source } from 'src/app/models/source';
import { SourceService } from 'src/app/service/source.service';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent {
  sources!:Source[];
  sourceForm!: FormGroup;
  

  constructor(private fb: FormBuilder,private router: Router, private sourceService:SourceService) {
   this.sourceForm = this.fb.group({
    nomSource: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]],
    fournisseurSource: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    commmentaireSource: ['', [Validators.required]],
    userName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
    motDePasse: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      });
  }
  onSubmit() {
    if (this.sourceForm.valid) {
      this.sourceService.ajouterSource(this.sourceForm.getRawValue()).subscribe(() =>
      window.location.reload()
       
      );
    } else {
     
    }
  }
  

//list
  ngOnInit(): void {
    this.getSource();
  }

  private getSource(){
    this.sourceService.sourceList().subscribe(data => {
      this.sources = data;
    });
  }

//update

updateSource(idSource: number){
    this.router.navigate(['DashboardAdmin/update-source/', idSource]);
  }

  
  deleteSource(id: number){
    this.sourceService.deleteSource(id).subscribe( data => {
      console.log(data);
      this.getSource();
    })
  }



  
  deleteAffectation(idSource: number,idCollection:number ){
    this.sourceService.deleteAffectation(idSource, idCollection).subscribe( data => {
      console.log(data);
      this.getSource();
    })
  }
  
  affecterCollectionASource(idSource: number){
      this.router.navigate(['DashboardAdmin/affecter-source/', idSource]);
    }
  
}
