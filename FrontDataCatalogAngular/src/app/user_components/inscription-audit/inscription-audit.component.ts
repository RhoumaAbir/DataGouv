import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Organisation, Typeorganisation } from 'src/app/core/models/organisation';

import { Role, Utilisateur } from 'src/app/core/models/utilisateur';
import { AuthentificationService } from 'src/app/core/services/services_utilisateur/authentification.service';
import { UtilisateurConnecteService } from 'src/app/core/services/services_utilisateur/utilisateur-connecte.service';
import { UtilisateurService } from 'src/app/core/services/services_utilisateur/utilisateur.service';

@Component({
  selector: 'app-inscription-audit',
  templateUrl: './inscription-audit.component.html',
  styleUrls: ['./inscription-audit.component.css']
})
export class InscriptionAuditComponent implements OnInit {


  FormAjoutOrganisation!: FormGroup;
  //Le modèle Organisation
  organisation1: Organisation = {
    idOrganisation: 0,
    nomOrganisation: '',
    typeOrganisation: Typeorganisation.ORGANISATION,
    paysOrganisation: '',
    nieOrganisation: '',
    nbrDecideurEntreprise: null,
    nbrAnalystesEntreprise: null
  }
  tryToSubmitOrganisation!: boolean;

  FormAjouterAuditeur!: FormGroup;
  // le modèle utilisateur
  utilisateur1: Utilisateur = {
    idUtilisateur: 0,
    roleUtilisateur: Role.ADMINISTRATEUR,
    nomUtilisateur: '',
    prenomUtilisateur: '',
    matriculeUtilisateur: '',
    identifiantUtilisateur: '',
    emailUtilisateur: '',
    telUtilisateur: '',
    fonctionUtilisateur: '',
    motDePasseUtil: '',
    demandeValidation: null,
    premiereConnection: null,
    token: ''
  }
  tryToSubmitAuditeur!: boolean;
  OrganisationConfirme: boolean = false;

  constructor(private service_authentification: AuthentificationService, private utilisateur_connecte: UtilisateurConnecteService, private formbuilder: FormBuilder, private service_utilisateur: UtilisateurService, private router: Router) {
    if (this.service_authentification.isLoggedIn()) //si l'utilisareur est connecté
    {
      // Rediriger l'utilisateur vers son page d'accueil (selon son role)
      if (this.utilisateur_connecte.getCurrentUser().roleUtilisateur.toString() === 'DECIDEUR') {
        this.router.navigate(['/home_decideur']);
      }
      else if (this.utilisateur_connecte.getCurrentUser().roleUtilisateur.toString() === 'AUDITEUR') {
        this.router.navigate(['/home_auditeur']);
      }
      else if (this.utilisateur_connecte.getCurrentUser().roleUtilisateur.toString() === 'ANALYSTE') {
        this.router.navigate(['/home_analyste']);
      }
    }
  }

  ngOnInit() {

    this.FormAjoutOrganisation = this.formbuilder.group({
      nom_organisation: ['', [Validators.required, Validators.maxLength(130), Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$')]],// Obligatoire + entre 1 et 130 caractères +contient uniquement des lettres majuscule ou miniscule et caractères accentués
      pays_organisation: ['', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿ ]{2,80}$')]],// Obligatoire + entre 2 et 80 caractères +contient uniquement des lettres majuscule ou miniscule et caractères accentués
      NIE_organisation: ['', [Validators.required, Validators.maxLength(50)]]// Obligatoire + entre 1 et 50 caractères (le NIE d'une organisation peut être mélangé)
    });


    this.FormAjouterAuditeur = this.formbuilder.group({
      nom_auditeur: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$')]],// Obligatoire + entre 2 et 50 caractères +contient uniquement des lettres majuscule ou miniscule et caractères accentués
      prenom_auditeur: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$')]],// Obligatoire + entre 2 et 50 caractères +contient uniquement des lettres majuscule ou miniscule et caractères accentués
      matricule_auditeur: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z0-9À-ÖØ-öø-ÿ]+$')]], // Obligatoire + entre 2 et 50 caractères +contient uniquement des lettres majuscule ou miniscule et des chiffres
      fonction_auditeur: ['', [Validators.required, Validators.maxLength(30), Validators.pattern('^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$')]], // Obligatoire + doit contenir uniquement des lettres + au maximum 30 caractères 
      tel_auditeur: ['', [Validators.required, Validators.pattern('^[0-9+ ]{1,60}$')]], // Obligatoire + doit commencer par "+ + ne contient que des chiffres et des espaces
      email_auditeur: ['', {
        validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')],
        asyncValidators: [this.EmailExiste.bind(this)]
      }],
      mot_de_passe_auditeur: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$')]], // Obligatoire + entre 8 et 20 caractères +contient au moins une lettre miniscule,une lettre majuscule,un chiffre et un caractère spécial.
      confirm_mot_de_passe_auditeur: ['', [Validators.required, this.passwordMatchValidator]]
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


  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const MotDePasse = control.parent?.get('mot_de_passe_auditeur')?.value;
    const ConfirmationMotDePasse = control.value;

    if (MotDePasse !== ConfirmationMotDePasse) {
      return { different: true };
    }
    return null;
  }
  organisation2!: Organisation;

  onSubmitOrganisation() {
    if (this.FormAjoutOrganisation.invalid) {
      this.tryToSubmitOrganisation = true;
      return;
    }
    else //si le formulaire est valide
    {
      this.tryToSubmitOrganisation = false
      // console.log(this.organisation1);
      this.organisation2 = this.organisation1;
      this.OrganisationConfirme = true;
      // Rendre les champs en lecture seule après soumission réussie
      this.FormAjoutOrganisation?.get('nom_organisation')?.disable();
      this.FormAjoutOrganisation?.get('pays_organisation')?.disable();
      this.FormAjoutOrganisation?.get('NIE_organisation')?.disable();
      this.OrganisationConfirme = true;
    }

  }
  resetOrganisation() {
    this.FormAjoutOrganisation.reset();
    this.OrganisationConfirme = false;
    //Activer tous les champs
    // this.FormAjoutOrganisation.get('nom_organisation')?.setValue("dddddddddddd");
    this.FormAjoutOrganisation?.get('nom_organisation')?.enable();
    this.FormAjoutOrganisation?.get('pays_organisation')?.enable();
    this.FormAjoutOrganisation?.get('NIE_organisation')?.enable();
  }

  onSubmitAuditeur() {
    if (this.OrganisationConfirme == true) {
      if (this.FormAjouterAuditeur.invalid) {
        this.tryToSubmitAuditeur = true;
        return;
      }
      else //si le formulaire est valide
      {
        this.tryToSubmitAuditeur = false
        console.log(this.utilisateur1);
        this.service_utilisateur.addAuditeurAndOrganisation(this.utilisateur1, this.organisation2)
          .subscribe((util) => {
            console.log(util.identifiantUtilisateur);
            this.router.navigate(['/inscription_reussite', util.identifiantUtilisateur]);
          }
            , error => { console.log(error); }
          );

      }

    }


  }

}
