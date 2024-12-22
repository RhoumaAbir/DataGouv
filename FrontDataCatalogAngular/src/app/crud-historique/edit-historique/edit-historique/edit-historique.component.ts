import { Component,OnInit } from '@angular/core';
import { HistoriqueService } from 'src/app/services/historique.service';
import { Historique } from '../../../model/historique';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
const operationTypes = ['MODIFICATION', 'CONSULTATION', 'SUPPRESSION'];

@Component({
  selector: 'app-edit-historique',
  templateUrl: './edit-historique.component.html',
  styleUrls: ['./edit-historique.component.css']
})
export class EditHistoriqueComponent {
  historiqueForm!: FormGroup;
  historiqueId!: number | null;

  historique!: Historique;
  operationTypes = operationTypes;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private historiqueService: HistoriqueService
  ) {}
  

  ngOnInit(): void {
    // Assuming you have a route parameter named 'id'
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('ID Parameter:', idParam);
    this.historiqueId = idParam ? +idParam : null;
    
  
    this.historiqueForm = this.formBuilder.group({
      dateOperation: ['', Validators.required],
      matriculeUtilisateur: ['', Validators.required],
      typeOperation: ['', Validators.required],
      details: ['', Validators.required]
    });
  
    if (this.historiqueId !== null) {
      // Fetch historical record by ID
      this.historiqueService.getHistoriqueById(this.historiqueId).subscribe(
        (result) => {
          this.historique = result;
          this.populateForm(result);
        },
        (error) => {
          console.error('Error fetching historical record:', error);
        }
      );
    }
  }
  
  populateForm(historique: Historique): void {
    // Set form values with the fetched historical record
    this.historiqueForm.patchValue({
      dateOperation: historique.dateOperation,
      matriculeUtilisateur: historique.matriculeUtilisateur,
      typeOperation: historique.typeOperation,
      details: historique.details
    });
  }
  onUpdate(): void {
    if (this.historiqueForm.valid) {
      // Get the current date and time
      const currentDate = new Date();
  
      // Update the historical record with the form values and current date
      const updatedHistorique: Historique = {
        idHistorique: this.historiqueId,
        ...this.historiqueForm.value,
        dateOperation: currentDate
      };
  
      this.historiqueService.updateHistorique(updatedHistorique).subscribe(
        (result) => {
          console.log('Historical record updated successfully:', result);
          // Navigate back to history list or any other page
          this.router.navigate(['/home_decideur/historique']);
        },
        (error) => {
          console.error('Error updating historical record:', error);
        }
      );
    }
  }
  

  goToHomePage(): void {
    // Navigate back to history list or any other page
    this.router.navigate(['/home_decideur/historique']);
  }
}