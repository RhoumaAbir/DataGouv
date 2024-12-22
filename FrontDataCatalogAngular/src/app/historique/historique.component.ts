import { Component, OnInit,Input } from '@angular/core';
import { HistoriqueService } from 'src/app/services/historique.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Historique } from '../model/historique';
import { DonneeParent } from '../model/DonneeParent';
@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  historiqueId: number | null = null; 
 historiques: Historique[]=[];
 isDeleteClicked: boolean = false;


  constructor(private historiqueService: HistoriqueService) { }
  ngOnInit(): void { 
    console.log('ngunit is calleed ')
    this.getAllHistoriques(); 
    } 
    getAllHistoriques():void {
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

  DeleteHistory(id:number| undefined):void{ 
    const isConfirmed = confirm('Are you sure you want to delete this item?');
    console.log(isConfirmed);
    if (isConfirmed && id !== undefined && id !== null) {
    
      this.historiqueService.deleteHistory(id).subscribe(() => {
        // Handle any additional logic after successful deletion
        console.log('Item deleted successfully', id);
  
        // Fetch updated historiques after deletion
        this.getAllHistoriques();
      });
  
    
  }
 
    
  }
 

  
}
