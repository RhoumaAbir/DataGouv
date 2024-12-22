import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { TechnicalMetadataComponent } from './technical-metadata/technical-metadata.component';
import { OperationalMetadataComponent } from './operational-metadata/operational-metadata.component';
import { BusinessMetadataComponent } from './business-metadata/business-metadata.component';
import { MetadataControlComponent } from './metadata-control/metadata-control.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListeAdministrateursComponent } from './user_components/liste-administrateurs/liste-administrateurs.component';
import { MenuComponent } from './user_components/menu/menu.component';
import { AjouterAdministrateurComponent } from './user_components/ajouter-administrateur/ajouter-administrateur.component';
import { LoginBackOfficeComponent } from './user_components/login-back-office/login-back-office.component';
import { AuthentificationService } from './core/services/services_utilisateur/authentification.service';
import { JwtInterceptor } from './core/config/jwt-inspector';
import { ListClassificationComponent } from './list-classification/list-classification.component';
import { CreateClassificationComponent } from './create-classification/create-classification.component';
import { UpdateClassificationComponent } from './update-classification/update-classification.component';
import { CreateUtilisateurAutoriseComponent } from './create-utilisateur-autorise/create-utilisateur-autorise.component';
import { ListUtilisateurAutoriseComponent } from './list-utilisateur-autorise/list-utilisateur-autorise.component';
import { UpdateUtilisateurAutoriseComponent } from './update-utilisateur-autorise/update-utilisateur-autorise.component';
import { CreateAutorisationComponent } from './create-autorisation/create-autorisation.component';
import { ListAutorisationComponent } from './list-autorisation/list-autorisation.component';
import { UpdateAutorisationComponent } from './update-autorisation/update-autorisation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailAutorisationsComponent } from './detail-autorisations/detail-autorisations.component';
import { AutorisationNonAffecterComponent } from './autorisation-non-affecter/autorisation-non-affecter.component';
import { UtilisateurNonAffecterComponent } from './utilisateur-non-affecter/utilisateur-non-affecter.component';
import { DesaffecteClassificationComponent } from './desaffecte-classification/desaffecte-classification.component';
import { ClassificatioNonAffecterComponent } from './classificatio-non-affecter/classificatio-non-affecter.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ControleDecideurComponent } from './metadata-control/decideur/controle-decideur/controle-decideur.component';
import { MotCleService } from "../Service/mot-cle.service";
import { UpdateCollectionComponent } from './technical-metadata/update-collection/update-collection/update-collection.component';
import { SourceComponent } from './technical-metadata/source/source/source.component';
import { UpdateSourceComponent } from './technical-metadata/source/source/update-source/update-source/update-source.component';
import { AffecterOrgComponent } from './technical-metadata/affecter-org/affecter-org.component';
import { AffecterCollectionComponent } from './technical-metadata/source/affecter-collection/affecter-collection.component';
import { DonneeParentComponent } from './technical-metadata/donnee-parent/donnee-parent.component';
import { DonneeFilsComponent } from './technical-metadata/donnee-fils/donnee-fils.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//import { MatDialog } from '@angular/material/dialog';
//import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BackOfficeComponent,
    ListClassificationComponent,
    NotFoundComponent,
    UsersComponent,
    TechnicalMetadataComponent,
    OperationalMetadataComponent,
    BusinessMetadataComponent,
    MetadataControlComponent,
    ListeAdministrateursComponent,
    MenuComponent,
    AjouterAdministrateurComponent,
    LoginBackOfficeComponent,
    MetadataControlComponent,
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
    UpdateCollectionComponent,
    SourceComponent,
    UpdateSourceComponent,
    AffecterOrgComponent,
    AffecterCollectionComponent,
    DonneeParentComponent,
    DonneeFilsComponent,
    ControleDecideurComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [
    MotCleService,
    AuthentificationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
