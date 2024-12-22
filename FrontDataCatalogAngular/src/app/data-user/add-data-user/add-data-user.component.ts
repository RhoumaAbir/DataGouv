import { Component,OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { UtilDonne } from '../../model/UtilDonne';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-data-user',
  templateUrl: './add-data-user.component.html',
  styleUrls: ['./add-data-user.component.css']
})
export class AddDataUserComponent implements OnInit{
  utilDonneForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private datauser:UserDataService,private router:Router) {} 
  ngOnInit(): void {
    this.utilDonneForm = this.formBuilder.group({
      matriculeUtilisateur: ['', Validators.required],
      fonction: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.utilDonneForm.valid) {
      const newUtilDonne: UtilDonne = this.utilDonneForm.value;
       this.datauser.addUtilDonne(newUtilDonne).subscribe(
        (result) => {
          alert('dataUser added successfully!');
          // You can perform additional actions if needed
        },
        (error) => {
          console.error('Error adding datauser:', error);
          alert('Failed to add datauser. Check console for details.');
        }
      );
    } else {
      console.error('Form is invalid. Cannot submit.');
      // After successfully adding, navigate back to /home_decideur/dataUser
      this.router.navigate(['/home_decideur/dataUser']);
    }
  }

  goToHomePage() {
    // Navigate to the home page
    this.router.navigate(['/home_decideur/dataUser']);
  }
  


}
