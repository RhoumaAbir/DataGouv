import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Role, Utilisateur } from 'src/app/core/models/utilisateur';
import { UtilisateurService } from 'src/app/core/services/services_utilisateur/utilisateur.service';

@Component({
  selector: 'app-ajouter-administrateur',
  templateUrl: './ajouter-administrateur.component.html',
  styleUrls: ['./ajouter-administrateur.component.css']
})
export class AjouterAdministrateurComponent implements OnInit {


  IdentifiantAdminAjoute: string = '';

  FormAjouterAdmin!: FormGroup
  // le modèle utlisateur
  utilisateur1: Utilisateur = {
    idUtilisateur: 0,
    roleUtilisateur: Role.ADMINISTRATEUR,
    nomUtilisateur: '',
    prenomUtilisateur: '',
    matriculeUtilisateur: null,
    identifiantUtilisateur: '',
    emailUtilisateur: '',
    telUtilisateur: null,
    fonctionUtilisateur: null,
    motDePasseUtil: '',
    demandeValidation: null,
    premiereConnection: null,
    token: ''
  }

  tryToSubmit!: boolean;

  constructor(private service_utilisateur: UtilisateurService, private formbuilder: FormBuilder) { }


  ngOnInit(): void {

    this.FormAjouterAdmin = this.formbuilder.group({
      nom_utilisateur: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿ]+$')]],// Obligatoire + entre 2 et 50 caractères +contient uniquement des lettres majuscule ou miniscule et caractères accentués
      prenom_utilisateur: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿ]+$')]],// Obligatoire + entre 2 et 50 caractères +contient uniquement des lettres majuscule ou miniscule et caractères accentués
      email_utilisateur: ['', {
        validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')],
        asyncValidators: [this.EmailExiste.bind(this)]
      }],
      mot_de_passe_util: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$')]], // Obligatoire + entre 8 et 20 caractères +contient au moins une lettre miniscule,une lettre majuscule,un chiffre et un caractère spécial.
      confirm_mot_de_passe_util: ['', [Validators.required, this.passwordMatchValidator]]
    });

  }

  EmailExiste(control: AbstractControl): Observable<ValidationErrors | null> {
    const email_saisi = control.value;
    return this.service_utilisateur.EmailFound(email_saisi).pipe(
      map(existe => {
        return existe ? { 'EmailExiste': true } : null;
      }),
      catchError((error) => {
        console.log(error); // en cas d'erreru de l'appel asynchrone 
        return throwError(error); // renvoie une nouvelle erreur observable
      })
    );
  }


  /*
   EmailExiste(control: AbstractControl): Observable<ValidationErrors | null>  {
      const email_saisi = control.value;
     
      this.service_utilisateur.EmailFound(email_saisi).subscribe(
        (reponse) => { existe = reponse; }, (error) => { console.log(error); }); // ===> réccupérer la réponse et l'erreur 
  
      if (existe == true) {
        return { EmailExiste: true };
      }
      return null;
    }
  */

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const MotDePasse = control.parent?.get('mot_de_passe_util')?.value;
    const ConfirmationMotDePasse = control.value;

    if (MotDePasse !== ConfirmationMotDePasse) {
      return { different: true };
    }
    return null;
  }




  onSubmit() {
    if (this.FormAjouterAdmin.invalid) {
      this.tryToSubmit = true;
      return;
    }
    this.tryToSubmit = false
    console.log(this.utilisateur1);
    this.service_utilisateur.addUserAdmin(this.utilisateur1)
      .subscribe((util) => {
        console.log(util.identifiantUtilisateur);
        this.IdentifiantAdminAjoute = "Félicitation ! l'identifiant de l'administrateur est : " + util.identifiantUtilisateur;
        this.FormAjouterAdmin.reset();
      },
        error => { console.log(error); }
      );

  }


  /*
  this.utilisateurService.ajouterUtilisateur(this.nouvelUtilisateur)
       .subscribe(() => {
         console.log('Utilisateur ajouté avec succès !');
         // Réinitialiser le formulaire ou effectuer toute autre action nécessaire
         this.nouvelUtilisateur = {
           nom: '',
           prenom: '',
           email: '',
           motDePasse: ''
         };
       }, erreur => {
         console.error('Erreur lors de l\'ajout de l\'utilisateur : ', erreur);
       });
   }
  */

}
