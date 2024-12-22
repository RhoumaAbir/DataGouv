import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { UsersComponent } from './users/users.component';
import { TechnicalMetadataComponent } from './technical-metadata/technical-metadata.component';
import { OperationalMetadataComponent } from './operational-metadata/operational-metadata.component';
import { BusinessMetadataComponent } from './business-metadata/business-metadata.component';
import { MetadataControlComponent } from './metadata-control/metadata-control.component';
import { ListeAdministrateursComponent } from './user_components/liste-administrateurs/liste-administrateurs.component';
import { AjouterAdministrateurComponent } from './user_components/ajouter-administrateur/ajouter-administrateur.component';
import { LoginBackOfficeComponent } from './user_components/login-back-office/login-back-office.component';
import { AuthGuard } from './core/config/auth-guard';

import { ListClassificationComponent } from './list-classification/list-classification.component';
import { CreateClassificationComponent } from './create-classification/create-classification.component';
import { UpdateClassificationComponent } from './update-classification/update-classification.component';
import { ListAutorisationComponent } from './list-autorisation/list-autorisation.component';
import { CreateAutorisationComponent } from './create-autorisation/create-autorisation.component';
import { UpdateAutorisationComponent } from './update-autorisation/update-autorisation.component';
import { ListUtilisateurAutoriseComponent } from './list-utilisateur-autorise/list-utilisateur-autorise.component';
import { UpdateUtilisateurAutoriseComponent } from './update-utilisateur-autorise/update-utilisateur-autorise.component';
import { CreateUtilisateurAutoriseComponent } from './create-utilisateur-autorise/create-utilisateur-autorise.component';
import { MatDialogModule } from '@angular/material/dialog';

import { ControleDecideurComponent } from './metadata-control/decideur/controle-decideur/controle-decideur.component';

import { UpdateCollectionComponent } from './technical-metadata/update-collection/update-collection/update-collection.component';
import { SourceComponent } from './technical-metadata/source/source/source.component';
import { UpdateSourceComponent } from './technical-metadata/source/source/update-source/update-source/update-source.component';
import { AffecterOrgComponent } from './technical-metadata/affecter-org/affecter-org.component';
import { AffecterCollectionComponent } from './technical-metadata/source/affecter-collection/affecter-collection.component';
import { DonneeParentComponent } from './technical-metadata/donnee-parent/donnee-parent.component';
import { DonneeFilsComponent } from './technical-metadata/donnee-fils/donnee-fils.component';
const routes: Routes = [
  { path: 'login', component: LoginBackOfficeComponent },
  {

    path: 'DashboardAdmin', component: BackOfficeComponent, canActivate: [AuthGuard], children: [
      { path: 'GestionDesUtilisateurs', component: UsersComponent },
      { path: 'liste_administrateurs', component: ListeAdministrateursComponent },
      { path: 'ajouter_administrateur', component: AjouterAdministrateurComponent },
      {path:'classifications',component:ListClassificationComponent},
      { path: 'GestionDesMetadonneesTechniques/source', component: SourceComponent },
      { path: 'GestionDesMetadonneesTechniques/donneParent/donneeFils', component: DonneeFilsComponent },
      { path: 'GestionDesUtilisateurs', component: UsersComponent },
      { path: 'affecter-source/:idSource', component: AffecterCollectionComponent },
      { path: 'GestionDesMetadonneesTechniques/donneParent', component: DonneeParentComponent },
      { path: 'affecter-collection/:idCollection', component: AffecterOrgComponent },
      { path: 'GestionDesMetadonneesTechniques', component: TechnicalMetadataComponent },
      { path: 'source', component: SourceComponent },
      { path: 'update-source/:idSource', component: UpdateSourceComponent },
      { path: 'update-collection/:idCollection', component: UpdateCollectionComponent },
      { path: 'GestionDesMetadonneesMetiers', component: BusinessMetadataComponent },
      { path: 'GestionDuControleDesMetadonnees', component: MetadataControlComponent },
      { path: 'GestionDesMetadonneesOperationelles', component: OperationalMetadataComponent },
      {path:'create-classification',component:CreateClassificationComponent},
  {path:'update-classification/:id',component:UpdateClassificationComponent},
  {path:'autorisations',component:ListAutorisationComponent},
  {path:'create-autorisation',component:CreateAutorisationComponent},
  {path:'update-autorisation/:id',component:UpdateAutorisationComponent},
  {path:'utilisateurAutorises',component:ListUtilisateurAutoriseComponent},
  {path:'create-utilisateurAutorise',component:CreateUtilisateurAutoriseComponent},
  {path:'update-utilisateurAutorise/:id',component:UpdateUtilisateurAutoriseComponent},
      { path: 'decideur', component: ControleDecideurComponent }
    ]
  },
  { path: '', redirectTo: 'DashboardAdmin', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatDialogModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }




