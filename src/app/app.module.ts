import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FooterComponent } from './general-components/footer/footer.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './general-components/header/header.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeSocialLinksComponent } from './page-accueil/home-social-links/home-social-links.component';
import { BoxDocumentTileComponent } from "./general-components/box-document-tile/box-document-tile.component";
import { TopProjectComponent } from './general-components/top-document/top-project.component';
import { PageMembresComponent } from './page-membres/page-membres.component';
import { MembresDuBureauComponent } from './page-membres/membres-du-bureau/membres-du-bureau.component';
import { MembreBureauComponent } from './page-membres/membres-du-bureau/membre-bureau/membre-bureau.component';
import { HttpClientModule } from '@angular/common/http';
import { PageDocumentComponent } from './general-components/page-document/page-document.component';
import { SearchBarComponent } from './general-components/page-document/search-bar/search-bar.component';
import { ListeDocumentComponent } from './general-components/page-document/liste-document/liste-document.component';
import { ListeDocumentTileComponent } from './general-components/liste-document-tile/liste-document-tile.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageAccueilComponent,
    PageNotFoundComponent,
    BoxDocumentTileComponent,
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
