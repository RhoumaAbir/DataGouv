import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { HomeDecideurComponent } from './home-decideur/home-decideur.component';
import { HomeAuditeurComponent } from './home-auditeur/home-auditeur.component';
import { HomeAnalysteComponent } from './home-analyste/home-analyste.component';
import { TechnicalMetadataComponent } from './technical-metadata/technical-metadata.component';
import { ClassificationComponent } from './classification/classification.component';
import { ModelsComponent } from './models/models.component';
import { ControleDecideurComponent } from './controle-decideur/controle-decideur.component';
import { AffichageControleAuditeurComponent } from './affichage-controle-auditeur/affichage-controle-auditeur.component';
import { SearchDecideurComponent } from './search-decideur/search-decideur.component';
import { OperationalMetadataComponent } from './operational-metadata/operational-metadata.component';
import { HistoriqueComponent } from './historique/historique.component';
import { SearchAuditeurComponent } from './search-auditeur/search-auditeur.component';
import { ControleAuditeurComponent } from './controle-auditeur/controle-auditeur.component';
import { ClassificationAuditeurComponent } from './classification-auditeur/classification-auditeur.component';
import { ModelsAuditeurComponent } from './models-auditeur/models-auditeur.component';
import { AfficherEntreprisesComponent } from './afficher-entreprises/afficher-entreprises.component';
import { InscriptionAuditComponent } from './user_components/inscription-audit/inscription-audit.component';
import { LoginFrontOfficeComponent } from './user_components/login-front-office/login-front-office.component';
import { AuthGuard } from './core/config/auth-guard';
import { NotFoundAuditeurComponent } from './not-found-auditeur/not-found-auditeur.component';
import { NotFoundDecideurComponent } from './not-found-decideur/not-found-decideur.component';
import { NotFoundAnalysteComponent } from './not-found-analyste/not-found-analyste.component';
import { UnautorizedComponent } from './unautorized/unautorized.component';
import { InscriptionReussiteComponent } from './user_components/inscription-reussite/inscription-reussite.component';
import { ListClassificationComponent } from './classification/list-classification/list-classification.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateClassificationComponent } from './classification/create-classification/create-classification.component';
import { UpdateClassificationComponent } from './classification/update-classification/update-classification.component';
import { CreateUtilisateurAutoriseComponent } from './classification/create-utilisateur-autorise/create-utilisateur-autorise.component';
import { ListUtilisateurAutoriseComponent } from './classification/list-utilisateur-autorise/list-utilisateur-autorise.component';
import { UpdateUtilisateurAutoriseComponent } from './classification/update-utilisateur-autorise/update-utilisateur-autorise.component';
import { CreateAutorisationComponent } from './classification/create-autorisation/create-autorisation.component';
import { ListAutorisationComponent } from './classification/list-autorisation/list-autorisation.component';
import { UpdateAutorisationComponent } from './classification/update-autorisation/update-autorisation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailAutorisationsComponent } from './classification/detail-autorisations/detail-autorisations.component';
import { AutorisationNonAffecterComponent } from './classification/autorisation-non-affecter/autorisation-non-affecter.component';
import { UtilisateurNonAffecterComponent } from './classification/utilisateur-non-affecter/utilisateur-non-affecter.component';
import { DesaffecteClassificationComponent } from './classification/desaffecte-classification/desaffecte-classification.component';
import { ClassificatioNonAffecterComponent } from './classification/classificatio-non-affecter/classificatio-non-affecter.component';
import { AjoutdecideurComponent } from './ajoutdecideur/ajoutdecideur.component';
import { ViewdecideurComponent } from './viewdecideur/viewdecideur.component';
import { ViewauditeurComponent } from './viewauditeur/viewauditeur.component';
import { AjoutauditComponent } from './ajoutaudit/ajoutaudit.component';
import { ModifierauditComponent } from './modifieraudit/modifieraudit.component';
import { ModifierdecideurComponent } from './modifierdecideur/modifierdecideur.component';
import {PrincipaleModelComponent} from "./principale-model/principale-model.component";
import {RegleQualiterComponent} from "./regle-qualiter/regle-qualiter.component";
import { DonneeParentComponent } from './technical-metadata/donnee-parent/donnee-parent.component';
import { DonneeFilsComponent } from './technical-metadata/donnee-fils/donnee-fils.component';
import { AddhistoriqueComponent } from './crud-historique/add-historique/addhistorique/addhistorique.component';
import { EditHistoriqueComponent } from './crud-historique/edit-historique/edit-historique/edit-historique.component';
import { DetailsHistoriqueComponent } from './crud-historique/details-historique/details-historique.component';
import { DataUserComponent } from './data-user/data-user/data-user.component';
import { AddDataUserComponent } from './data-user/add-data-user/add-data-user.component';
import { EditDataUserComponent } from './data-user/edit-data-user/edit-data-user.component';
import { TraceDetailsComponent } from './trace/trace-details/trace-details.component';
import { ListSegmentComponent } from './segment/list-segment/list-segment.component';
import { EditSegmentComponent } from './segment/edit-segment/edit-segment.component';
import { AddSegmentComponent } from './segment/add-segment/add-segment.component';
import { UpdateCollectionComponent } from './technical-metadata/update-collection/update-collection/update-collection.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inscription_auditeur_org', component: InscriptionAuditComponent },
  { path: 'inscription_reussite/:parametre', component: InscriptionReussiteComponent },
  { path: 'login', component: LoginFrontOfficeComponent },
  { path: 'add_history', component:AddhistoriqueComponent },
  { path: 'edit-history/:id', component:EditHistoriqueComponent },
  {path:'details-history/:id',component:DetailsHistoriqueComponent},
  { path: 'add-dataUser', component:AddDataUserComponent },
  { path: 'edit-dataUser/:id', component:EditDataUserComponent },
  { path: 'trace-details/:donneeId', component:TraceDetailsComponent }, 
  { path: 'edit-segment/:id', component:EditSegmentComponent },
  { path: 'add-segment', component:AddSegmentComponent },
  
 
  {
    path: 'home_decideur', component: HomeDecideurComponent, canActivate: [AuthGuard], data: { role_autorise: 'DECIDEUR' },
    children: [
      { path: '', redirectTo: 'chercher', pathMatch: 'full' },
      { path: 'chercher', component: SearchDecideurComponent },
      { path: 'donnee_parent/donneeFils', component: DonneeFilsComponent },
      { path: 'donnee_parent', component: DonneeParentComponent },
      { path: 'segment', component: ListSegmentComponent },
      { path: 'mes_donnees', component: TechnicalMetadataComponent },
      { path: 'traces_des_donnees', component: OperationalMetadataComponent },
      { path: 'historique', component: HistoriqueComponent },
      { path: 'les_classifications', component:ListClassificationComponent },
      {path:'update-classification/:id',component:UpdateClassificationComponent},
      {path:'update-utilisateurAutorise/:id',component:UpdateUtilisateurAutoriseComponent},
      {path:'update-autorisation/:id',component:UpdateAutorisationComponent},
      {path:'update-collection/:id',component:UpdateCollectionComponent},
      { path: 'les_Autorisations', component:ListAutorisationComponent },
      { path: 'les_utilisateurAutorises', component:ListUtilisateurAutoriseComponent },
      { path: 'les_models', component: PrincipaleModelComponent  },
      {path : "model_fils" , component :ModelsComponent},
      {path : "regle" , component :RegleQualiterComponent},
      { path: 'gerer_mes_scans', component: ControleDecideurComponent },
      { path: 'les_controles_des_auditeur', component: AffichageControleAuditeurComponent },
      { path: 'dataUser', component: DataUserComponent },
      { path: 'viewdecideur/:referenceControle', component: ViewdecideurComponent },
      { path: 'ajout', component: AjoutdecideurComponent },
      { path: 'modifier/:referenceControle', component: ModifierdecideurComponent },
      { path: 'viewauditdecideur/:referenceAudit', component: ViewauditeurComponent },
{ path: '', redirectTo: 'home_decideur', pathMatch: 'full' }

    ]
  },
 
  {
    path: 'home_auditeur', component: HomeAuditeurComponent, canActivate: [AuthGuard], data: { role_autorise: 'AUDITEUR' },
    children: [
      { path: '', redirectTo: 'chercher', pathMatch: 'full' },
      { path: 'chercher', component: SearchAuditeurComponent },
      { path: 'mes_audits', component: ControleAuditeurComponent },
      { path: 'les_classifications', component: CreateUtilisateurAutoriseComponent },
      { path: 'les_models', component: ModelsAuditeurComponent },
      { path: 'les_entreprises', component: AfficherEntreprisesComponent },
      { path: 'viewaudit/:referenceAudit', component: ViewauditeurComponent },
      { path: 'ajout', component: AjoutauditComponent },
      { path: 'modifier/:referenceAudit', component: ModifierauditComponent },
 { path: '', redirectTo: 'home_auditeur', pathMatch: 'full' }
    ]
  },
  { path: 'home_analyste', component: HomeAnalysteComponent, canActivate: [AuthGuard], data: { role_autorise: 'ANALYSTE' }, },
  { path: 'unauthorized', component: UnautorizedComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
