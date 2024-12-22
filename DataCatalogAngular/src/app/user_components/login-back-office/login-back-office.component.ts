import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateurlogin } from 'src/app/core/models/utilisateurlogin';
import { AuthentificationService } from 'src/app/core/services/services_utilisateur/authentification.service';
import { UtilisateurConnecteService } from 'src/app/core/services/services_utilisateur/utilisateur-connecte.service';


@Component({
  selector: 'app-login-back-office',
  templateUrl: './login-back-office.component.html',
  styleUrls: ['./login-back-office.component.css']
})
export class LoginBackOfficeComponent implements OnInit {

  constructor(private service_authentification: AuthentificationService, private utilisateur_connecte: UtilisateurConnecteService, private router: Router, private formbuilder: FormBuilder) {
    if (service_authentification.isLoggedIn()) //si l'utilisareur est connecté
    {
      this.router.navigate(['/DashboardAdmin']);
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
    this.tryToSubmit = false
    //  console.log(this.utilisateur_login.username + "------------------" + this.utilisateur_login.password);
    this.service_authentification.loginAdmin(this.utilisateur_login)
      .subscribe((util) => {
        // Stocker le token JWT dans le stockage local
        this.service_authentification.setToken(util.token);

        //Sauvegarder l'utilisateur connecté dans le service UtilisateurConncete
        this.utilisateur_connecte.setCurrentUser(util);

        //Réinitialiser la variable ErreurBackend puisqu'il n'y a pas d'erreur
        this.ErreurBackend = '';
        // Rediriger l'utilisateur vers la page d'accueil(DashboardAdmin)
        this.router.navigate(['/DashboardAdmin']);
      }
        , error => { this.ErreurBackend = error; } //affecter l'erreur reçue à la variable "ErreurBackend" pour qu'on puisse l'afficher
      );

  }



}
