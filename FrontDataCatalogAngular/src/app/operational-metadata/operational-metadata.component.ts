import { Component } from '@angular/core';
import { trace } from '../model/trace';
import { TraceService } from '../services/trace.service';
import { DonneeParent } from '../model/DonneeParent';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-operational-metadata',
  templateUrl: './operational-metadata.component.html',
  styleUrls: ['./operational-metadata.component.css']
})
export class OperationalMetadataComponent {
  traces: trace[] = [];
  techniqueParents: DonneeParent[] = []; 
  

  constructor(private traceService: TraceService,private router:Router) {}

  ngOnInit(): void {
    console.log('ngOnInit is called');
    this.getAllTraces();
    this.getAllNomTechniqueParents();
  }
 

 
  onClick(donneeId: number|undefined): void {
    this.router.navigate(['/trace-details', donneeId]);
  }
  getAllTraces(): void {
    this.traceService.getAllTraces().subscribe(
      (data) => {
        this.traces = data;
        console.log('List of traces:', this.traces);
      },
      (error) => {
        console.error('Error fetching trace data:', error);
      }
    );
  }
  getAllNomTechniqueParents(): void {
    this.traceService.getAllDonneeParents().subscribe(
      (data) => {
        console.log("data", data)
        this.techniqueParents = data
        console.log('List of NomTechniqueParents:', this.techniqueParents);
      },
      (error) => {
        console.error('Error fetching NomTechniqueParents:', error);
      }
    );
  
  }}

