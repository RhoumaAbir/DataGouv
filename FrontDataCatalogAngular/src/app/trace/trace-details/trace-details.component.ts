import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TraceService } from '../../services/trace.service'; // Adjust the path based on your actual service location

@Component({
  selector: 'app-trace-details',
  templateUrl: './trace-details.component.html',
  styleUrls: ['./trace-details.component.css']
})
export class TraceDetailsComponent {
  
  parent_data: any; // Replace with the actual type/interface of your traceDetails
  historiques: any;
  traces: any;
  user:any;

  constructor(
    private route: ActivatedRoute,private router:Router,
    private traceService: TraceService // Inject your TraceService
  ) {}

  ngOnInit(): void {
    const idDonneeParent = this.route.snapshot.paramMap.get('donneeId');

    console.log("id donnee parent : " + idDonneeParent);

    if (idDonneeParent !== null && idDonneeParent !== undefined) {
      this.traceService.retrieveTraces(Number(idDonneeParent)).subscribe(
        (data) => {
          console.log('data.traces', data.traces);
          console.log('data.donneeParent', data.donneeParent);
          console.log('data.user', data.user);
          this.parent_data = data.donneeParent;
          this.user= data.user;
          this.traces = data.traces;
        },
        (error) => {
          console.error('Error fetching trace details:', error);
        }
      );    }
  }
  goToHomePage() {
    // Navigate to the home page
    this.router.navigate(['/home_decideur/traces_des_donnees']);
  }
}