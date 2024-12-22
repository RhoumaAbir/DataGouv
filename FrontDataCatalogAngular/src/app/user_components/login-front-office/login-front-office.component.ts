import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateurlogin } from 'src/app/core/models/utilisateurlogin';
import { AuthentificationService } from 'src/app/core/services/services_utilisateur/authentification.service';
import { UtilisateurConnecteService } from 'src/app/core/services/services_utilisateur/utilisateur-connecte.service';

@Component({
  selector: 'app-login-front-office',
  templateUrl: './login-front-office.component.html',
  styleUrls: ['./login-front-office.component.css']
})
export class LoginFrontOfficeComponent implements OnInit {

  constructor(private service_authentification: AuthentificationService, private utilisateur_connecte: UtilisateurConnecteService, private router: Router, private formbuilder: FormBuilder) {
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

  FormLogin!: FormGroup;
  // le modèle utlisateur
  utilisateur_login: Utilisateurlogin = {
    username: '',
    password: "",
  }

  tryToSubmit: boolean = false;
  ErreurBackend: string = '';


  ngOnInit(): void {

    this.FormLogin = this.formbuilder.group({
      identifiant: ['', Validators.required],
      mot_de_passe: ['', Validators.required]
    });

  }

  onSubmit() {

    if (this.FormLogin.invalid) {
      this.tryToSubmit = true;
      return;
    }
    this.tryToSubmit = false;
    this.service_authentification.login(this.utilisateur_login)
      .subscribe((util) => {
        // Stocker le token JWT dans le stockage local
        this.service_authentification.setToken(util.utilisateurDto.token);

        //Sauvegarder l'utilisateur connecté dans le service UtilisateurConncete
        this.utilisateur_connecte.setCurrentUser(util.utilisateurDto);
        this.utilisateur_connecte.setCurrentOrganisation(util.organisationDto);
        //Réinitialiser la variable ErreurBackend puisqu'il n'y a pas d'erreur
        this.ErreurBackend = '';
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
        , error => { this.ErreurBackend = error; } //affecter l'erreur reçue à la variable "ErreurBackend" pour qu'on puisse l'afficher
      );

  }




}
