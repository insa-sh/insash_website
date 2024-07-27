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
import { TopDocumentComponent } from './general-components/top-document/top-document.component';
import { PageMembresComponent } from './page-membres/page-membres.component';
import { MembresDuBureauComponent } from './page-membres/membres-du-bureau/membres-du-bureau.component';
import { MembreBureauComponent } from './page-membres/membres-du-bureau/membre-bureau/membre-bureau.component';
import { MembresActifsComponent } from './page-membres/membres-actifs/membres-actifs.component';
import { BoxMembreComponent } from './page-membres/membres-actifs/box-membre/box-membre.component';
import { HttpClientModule } from '@angular/common/http';
import { PageDocumentComponent } from './general-components/page-document/page-document.component';
import { SearchBarComponent } from './general-components/page-document/search-bar/search-bar.component';
import { ListeDocumentComponent } from './general-components/page-document/liste-document/liste-document.component';
import { ListDocumentTileComponent } from './general-components/list-document-tile/list-document-tile.component';
import { ReactiveFormsModule } from "@angular/forms";
import { PageProjetsComponent } from './page-projets/page-projets.component';
import { PageCheatsheetComponent } from './page-cheatsheet/page-cheatsheet.component';
import { PageNewsComponent } from './page-news/page-news.component';
import { PageTipsComponent } from './page-tips/page-tips.component';
import { PagePolitiqueConfidentialiteComponent } from './page-politique-confidentialite/page-politique-confidentialite.component';
import { PageMentionsLegalesComponent } from './page-mentions-legales/page-mentions-legales.component';
import { PageDocumentsDetailComponent } from './page-documents-detail/page-document-detail.component';
import { ProjectDetailHeaderComponent } from './page-documents-detail/project-detail-header/project-detail-header.component';
import { MarkdownModule, MarkedOptions } from "ngx-markdown";


import "prismjs/prism";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "prismjs/plugins/autoloader/prism-autoloader.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "prismjs/plugins/show-language/prism-show-language.js";
import { PageMembresDetailComponent } from './page-membres-detail/page-membres-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageAccueilComponent,
    PageNotFoundComponent,
    BoxDocumentTileComponent,
    TopDocumentComponent,
    HomeSocialLinksComponent,
    PageMembresComponent,
    MembresDuBureauComponent,
    MembreBureauComponent,
    MembresActifsComponent,
    BoxMembreComponent,
    PageDocumentComponent,
    SearchBarComponent,
    ListeDocumentComponent,
    ListDocumentTileComponent,
    PageProjetsComponent,
    PageCheatsheetComponent,
    PageNewsComponent,
    PageTipsComponent,
    PagePolitiqueConfidentialiteComponent,
    PageMentionsLegalesComponent,
    PageDocumentsDetailComponent,
    ProjectDetailHeaderComponent,
    PageMembresDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, MarkdownModule.forRoot({
    markedOptions: {
      provide: MarkedOptions,
      useValue: {
        gfm: true,
        breaks: true
      }
    }
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
