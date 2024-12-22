import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Source } from 'src/app/models/source';
import { SourceService } from 'src/app/service/source.service';

@Component({
  selector: 'app-update-source',
  templateUrl: './update-source.component.html',
  styleUrls: ['./update-source.component.css']
})
export class UpdateSourceComponent {

  idSource!: number;
  source: Source = new Source();
  constructor(private sourceService:SourceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idSource=this.route.snapshot.params['idSource'];
    this.sourceService.getSourceById(this.idSource).subscribe(data =>{this.source =<Source>data;},error=>console.log(error));
    
    
  }

  onSubmit(){
    this.sourceService.updateSource(this.idSource,this.source).subscribe( data =>{
      this.goToCollectionList();
    }
    , error => console.log(error));
  }

  goToCollectionList(){
    this.router.navigate(['DashboardAdmin/GestionDesMetadonneesTechniques']);
  }
}
