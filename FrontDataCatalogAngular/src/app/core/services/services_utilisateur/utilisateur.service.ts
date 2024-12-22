import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../../models/utilisateur';
import { Organisation } from '../../models/organisation';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) {

  }

  UrlDeBase: string = "http://localhost:8083/catalogue/Utilisateur";

  /*
  getAllAdministrators(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.UrlDeBase + "/afficher_liste_administrateurs");
  }

  deleteUser(id1: number): Observable<any> {
    return this.http.delete(this.UrlDeBase + "/supprimer_utilisateur/" + id1);
  }

  addUserAdmin(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.UrlDeBase + "/ajouter_administrateur", utilisateur)
  }

*/

  addAuditeurAndOrganisation(auditeur: Utilisateur, organisation_aud: Organisation): Observable<Utilisateur> {
    const auditeurAvecOrganisationDto: any = {
      utilisateurDto: auditeur,
      organisationDto: organisation_aud
    };
    return this.http.post<Utilisateur>(this.UrlDeBase + "/ajouter_auditeur_avec_organisation", auditeurAvecOrganisationDto)
  }

  EmailFound(email: string): Observable<Boolean> {
    const params = { email_utilisateur: email };
    return this.http.get<Boolean>(this.UrlDeBase + "/verifier_email", { params });
  }



}
