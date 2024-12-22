import { Component } from '@angular/core';
import { Historique } from '../model/historique';
import { HistoriqueService } from 'src/app/services/historique.service';
@Component({
  selector: 'app-operational-metadata',
  templateUrl: './operational-metadata.component.html',
  styleUrls: ['./operational-metadata.component.css']
})
export class OperationalMetadataComponent {
  historiques: Historique[]=[];
  constructor(private historiqueService: HistoriqueService) { }
  ngOnInit(): void { 
    console.log('ngunit is calleed ')
    this.getAllHistoriques(); 
    } 
    getAllHistoriques(): void {
      console.log("test",this.historiques); 
      this.historiqueService.getAllHistoriques().subscribe(
          (data) => {
              this.historiques = data;
              console.log("liste des historiques ", this.historiques);
          },
          (error) => {
              console.error('Error fetching historical data:', error);
              // Handle error if needed
          }
      );
  }
}
