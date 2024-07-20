import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeSocialLinksComponent } from './page-accueil/home-social-links/home-social-links.component';
import { ProjectTileComponent } from "./page-accueil/project-tile/project-tile.component";
import { TopProjectComponent } from './page-accueil/top-project/top-project.component';
import { PageMembresComponent } from './page-membres/page-membres.component';
import { MembresDuBureauComponent } from './page-membres/membres-du-bureau/membres-du-bureau.component';
import { MembreBureauComponent } from './page-membres/membres-du-bureau/membre-bureau/membre-bureau.component';
import { HttpClientModule } from '@angular/common/http';
import { PageDocumentComponent } from './page-document/page-document.component';
import { SearchBarComponent } from './page-document/search-bar/search-bar.component';
import { ListeDocumentComponent } from './page-document/liste-document/liste-document.component';
import { ListeDocumentTileComponent } from './page-document/liste-document/liste-document-tile/liste-document-tile.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageAccueilComponent,
    PageNotFoundComponent,
    ProjectTileComponent,
    TopProjectComponent,
    HomeSocialLinksComponent,
    PageMembresComponent,
    MembresDuBureauComponent,
    MembreBureauComponent,
    PageDocumentComponent,
    SearchBarComponent,
    ListeDocumentComponent,
    ListeDocumentTileComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
