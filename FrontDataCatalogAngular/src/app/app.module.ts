import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDecideurComponent } from './home-decideur/home-decideur.component';
import { HomeAuditeurComponent } from './home-auditeur/home-auditeur.component';
import { HomeAnalysteComponent } from './home-analyste/home-analyste.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterHomeComponent } from './footers/footer-home/footer-home.component';
import { SearchDecideurComponent } from './search-decideur/search-decideur.component';
import { SearchAuditeurComponent } from './search-auditeur/search-auditeur.component';
import { TechnicalMetadataComponent } from './technical-metadata/technical-metadata.component';
import { OperationalMetadataComponent } from './operational-metadata/operational-metadata.component';
import { ClassificationComponent } from './classification/classification.component';
import { ModelsComponent } from './models/models.component';
import { ControleDecideurComponent } from './controle-decideur/controle-decideur.component';
import { AffichageControleAuditeurComponent } from './affichage-controle-auditeur/affichage-controle-auditeur.component';
import { HeaderDecideurComponent } from './headers/header-decideur/header-decideur.component';
import { FooterDecideurComponent } from './footers/footer-decideur/footer-decideur.component';
import { ControleAuditeurComponent } from './controle-auditeur/controle-auditeur.component';
import { ClassificationAuditeurComponent } from './classification-auditeur/classification-auditeur.component';
import { ModelsAuditeurComponent } from './models-auditeur/models-auditeur.component';
import { AfficherEntreprisesComponent } from './afficher-entreprises/afficher-entreprises.component';
import { HeaderAuditeurComponent } from './headers/header-auditeur/header-auditeur.component';
import { FooterAuditeurComponent } from './footers/footer-auditeur/footer-auditeur.component';
import { HeaderAnalysteComponent } from './headers/header-analyste/header-analyste.component';
import { FooterAnalysteComponent } from './footers/footer-analyste/footer-analyste.component';
import { InscriptionAuditComponent } from './user_components/inscription-audit/inscription-audit.component';
import { LoginFrontOfficeComponent } from './user_components/login-front-office/login-front-office.component';
import { AuthentificationService } from './core/services/services_utilisateur/authentification.service';
import { JwtInterceptor } from './core/config/jwt-inspector';
import { NotFoundDecideurComponent } from './not-found-decideur/not-found-decideur.component';
import { NotFoundAuditeurComponent } from './not-found-auditeur/not-found-auditeur.component';
import { NotFoundAnalysteComponent } from './not-found-analyste/not-found-analyste.component';
import { UtilisateurConnecteService } from './core/services/services_utilisateur/utilisateur-connecte.service';
import { UnautorizedComponent } from './unautorized/unautorized.component';
import { InscriptionReussiteComponent } from './user_components/inscription-reussite/inscription-reussite.component';
import { HistoriqueComponent } from './historique/historique.component';
import { AddhistoriqueComponent } from './crud-historique/add-historique/addhistorique/addhistorique.component';
import { EditHistoriqueComponent } from './crud-historique/edit-historique/edit-historique/edit-historique.component';
import { DetailsHistoriqueComponent } from './crud-historique/details-historique/details-historique.component';
import { DataUserComponent } from './data-user/data-user/data-user.component';
import { AddDataUserComponent } from './data-user/add-data-user/add-data-user.component';
import { EditDataUserComponent } from './data-user/edit-data-user/edit-data-user.component';
import { TraceListeComponent } from './trace/trace-liste/trace-liste.component';
import { TraceDetailsComponent } from './trace/trace-details/trace-details.component';
import { AddSegmentComponent } from './segment/add-segment/add-segment.component';
import { ListSegmentComponent } from './segment/list-segment/list-segment.component';
import { EditSegmentComponent } from './segment/edit-segment/edit-segment.component';
import { ListClassificationComponent } from './classification/list-classification/list-classification.component';
import { CreateClassificationComponent } from './classification/create-classification/create-classification.component';
import { UpdateClassificationComponent } from './classification/update-classification/update-classification.component';
import { CreateUtilisateurAutoriseComponent } from './classification/create-utilisateur-autorise/create-utilisateur-autorise.component';
import { ListUtilisateurAutoriseComponent } from './classification/list-utilisateur-autorise/list-utilisateur-autorise.component';
import { UpdateUtilisateurAutoriseComponent } from './classification/update-utilisateur-autorise/update-utilisateur-autorise.component';
import { CreateAutorisationComponent } from './classification/create-autorisation/create-autorisation.component';
import { ListAutorisationComponent } from './classification/list-autorisation/list-autorisation.component';
import { UpdateAutorisationComponent } from './classification/update-autorisation/update-autorisation.component';
import { DetailAutorisationsComponent } from './classification/detail-autorisations/detail-autorisations.component';
import { AutorisationNonAffecterComponent } from './classification/autorisation-non-affecter/autorisation-non-affecter.component';
import { UtilisateurNonAffecterComponent } from './classification/utilisateur-non-affecter/utilisateur-non-affecter.component';
import { DesaffecteClassificationComponent } from './classification/desaffecte-classification/desaffecte-classification.component';
import { ClassificatioNonAffecterComponent } from './classification/classificatio-non-affecter/classificatio-non-affecter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewdecideurComponent } from './viewdecideur/viewdecideur.component';
import { ViewauditeurComponent } from './viewauditeur/viewauditeur.component';
import { AjoutdecideurComponent } from './ajoutdecideur/ajoutdecideur.component';
import { AjoutauditComponent } from './ajoutaudit/ajoutaudit.component';
import { ModifierauditComponent } from './modifieraudit/modifieraudit.component';
import { ModifierdecideurComponent } from './modifierdecideur/modifierdecideur.component';
import { AddMotCleComponent } from './add-mot-cle/add-mot-cle.component';
import { MotCleService } from "./core/service/mot-cle.service";
import { PopUpAffectationComponent } from './pop-up-affectation/pop-up-affectation.component';
import { MatButtonModule } from '@angular/material/button';
import { LoggingInterceptor } from "./LoggingInterceptor";
import { PrincipaleModelComponent } from './principale-model/principale-model.component';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RegleQualiterComponent } from './regle-qualiter/regle-qualiter.component';
import { PopUpModelDettailComponent } from './pop-up-model-dettail/pop-up-model-dettail.component';
import { PopUpRegleComponent } from './pop-up-regle/pop-up-regle.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DonneeParentComponent } from './technical-metadata/donnee-parent/donnee-parent.component';
import { DonneeFilsComponent } from './technical-metadata/donnee-fils/donnee-fils.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateCollectionComponent } from './technical-metadata/update-collection/update-collection/update-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeDecideurComponent,
    HomeAuditeurComponent,
    HomeAnalysteComponent,
    NotFoundComponent,
    FooterHomeComponent,
    SearchDecideurComponent,
    SearchAuditeurComponent,
    TechnicalMetadataComponent,
    OperationalMetadataComponent,
    ClassificationComponent,
    ModelsComponent,
    ControleDecideurComponent,
    AffichageControleAuditeurComponent,
    HeaderDecideurComponent,
    FooterDecideurComponent,
    ControleAuditeurComponent,
    ClassificationAuditeurComponent,
    ModelsAuditeurComponent,
    AfficherEntreprisesComponent,
    HeaderAuditeurComponent,
    FooterAuditeurComponent,
    HeaderAnalysteComponent,
    InscriptionAuditComponent,
    LoginFrontOfficeComponent,
    NotFoundDecideurComponent,
    NotFoundAuditeurComponent,
    NotFoundAnalysteComponent,
    UnautorizedComponent,
    InscriptionReussiteComponent,
    ListClassificationComponent,
    CreateClassificationComponent,
    UpdateClassificationComponent,
    CreateUtilisateurAutoriseComponent,
    ListUtilisateurAutoriseComponent,
    UpdateUtilisateurAutoriseComponent,
    CreateAutorisationComponent,
    ListAutorisationComponent,
    UpdateAutorisationComponent,
    DetailAutorisationsComponent,
    AutorisationNonAffecterComponent,
    UtilisateurNonAffecterComponent,
    DesaffecteClassificationComponent,
    ClassificatioNonAffecterComponent,
    ViewdecideurComponent,
    ViewauditeurComponent,
    AjoutdecideurComponent,
    AjoutauditComponent,
    ModifierauditComponent,
    ModifierdecideurComponent,
    AddMotCleComponent,
    PopUpAffectationComponent,
    PrincipaleModelComponent,
    RegleQualiterComponent,
    PopUpModelDettailComponent,
    PopUpRegleComponent,
    DonneeParentComponent,
    DonneeFilsComponent,
    FooterAnalysteComponent,
    HistoriqueComponent,
    AddhistoriqueComponent,
    EditHistoriqueComponent,
    DetailsHistoriqueComponent,
    DataUserComponent,
    AddDataUserComponent,
    EditDataUserComponent,
    TraceListeComponent,
    TraceDetailsComponent,
    AddSegmentComponent,
    ListSegmentComponent,
    EditSegmentComponent,
    UpdateCollectionComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgOptimizedImage,
  ],
  providers: [

    MotCleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
    //  UtilisateurConnecteService,
    AuthentificationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
