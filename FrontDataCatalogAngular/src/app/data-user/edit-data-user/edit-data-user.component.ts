import { Component } from '@angular/core';
import { UtilDonne } from '../../model/UtilDonne';
import { UserDataService } from 'src/app/services/user-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-data-user',
  templateUrl: './edit-data-user.component.html',
  styleUrls: ['./edit-data-user.component.css']
})
export class EditDataUserComponent {
  utilDonneForm!: FormGroup;
  matriculeUtilisateurId!: number | null;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userDataService: UserDataService
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('ID Parameter:', idParam);
    this.matriculeUtilisateurId = idParam ? +idParam : null;

    this.utilDonneForm = this.formBuilder.group({
      matriculeUtilisateur: ['', Validators.required],
      fonction: ['', Validators.required],
    });

    if (this.matriculeUtilisateurId !== null) {
      this.userDataService.getUtilDonneById(this.matriculeUtilisateurId).subscribe(
        (result) => {
          this.populateForm(result);
        },
        (error) => {
          console.error('Error fetching user record:', error);
        }
      );
    }
  }
  populateForm(utilDonne: UtilDonne): void {
    this.utilDonneForm.patchValue({
      matriculeUtilisateur: utilDonne.matriculeUtilisateur,
      fonction: utilDonne.fonction,
    });
  }
  onUpdate(): void {
    if (this.utilDonneForm.valid) {
      const updatedUtilDonne: UtilDonne = {
        idUtilDonne: this.matriculeUtilisateurId,
        ...this.utilDonneForm.value,
      };

      this.userDataService.updateUtilDonne(updatedUtilDonne).subscribe(
        (result) => {
          console.log('User record updated successfully:', result);
          this.router.navigate(['/home_decideur/dataUser']); // Update the path accordingly
        },
        (error) => {
          console.error('Error updating user record:', error);
        }
      );
    }
  }

  goToUserListPage(): void {
    this.router.navigate(['/home_decideur/dataUser']); // Update the path accordingly
  }
}

