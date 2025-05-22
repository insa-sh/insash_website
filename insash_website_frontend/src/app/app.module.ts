import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Meta, Title } from '@angular/platform-browser';

import { FooterComponent } from "./general-components/footer/footer.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./general-components/header/header.component";
import { PageAccueilComponent } from "./page-accueil/page-accueil.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeSocialLinksComponent } from "./page-accueil/home-social-links/home-social-links.component";
import { BoxDocumentTileComponent } from "./general-components/box-document-tile/box-document-tile.component";
import { TopDocumentComponent } from "./general-components/top-document/top-document.component";
import { PageMembresComponent } from "./page-membres/page-membres.component";
import { MembresDuBureauComponent } from "./page-membres/membres-du-bureau/membres-du-bureau.component";
import { MembreBureauComponent } from "./page-membres/membres-du-bureau/membre-bureau/membre-bureau.component";
import { MembresActifsComponent } from "./page-membres/membres-actifs/membres-actifs.component";
import { BoxMembreComponent } from "./page-membres/membres-actifs/box-membre/box-membre.component";
import { HttpClientModule } from "@angular/common/http";
import { PageDocumentComponent } from "./general-components/page-document/page-document.component";
import { SearchBarComponent } from "./general-components/page-document/search-bar/search-bar.component";
import { ListeDocumentComponent } from "./general-components/page-document/liste-document/liste-document.component";
import { ListeDocumentTileComponent } from "./general-components/liste-document-tile/liste-document-tile.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PagePolitiqueConfidentialiteComponent } from "./page-politique-confidentialite/page-politique-confidentialite.component";
import { PageMentionsLegalesComponent } from "./page-mentions-legales/page-mentions-legales.component";
import { PageDocumentsDetailComponent } from "./general-components/page-documents-detail/page-document-detail.component";
import { ProjetDetailHeaderComponent } from "./page-projet-detail/projet-detail-header/projet-detail-header.component";
import { MarkdownModule, MarkedOptions } from "ngx-markdown";
import { RejoindreLeClubComponent } from "./page-accueil/rejoindre-le-club/rejoindre-le-club.component";

import "prismjs/prism";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "prismjs/plugins/autoloader/prism-autoloader.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "prismjs/plugins/show-language/prism-show-language.js";
import { PageMembresDetailComponent } from "./page-membres-detail/page-membres-detail.component";
import { TopProjetComponent } from "./general-components/top-document/top-projet/top-projet.component";
import { CategoriesSelectorComponent } from "./general-components/page-document/search-bar/categories-selector/categories-selector.component";
import { PageProjetComponent } from "./page-projet/page-projet.component";
import { PageProjetDetailComponent } from "./page-projet-detail/page-projet-detail.component";
import { PageArticleDetailComponent } from "./page-article-detail/page-article-detail.component";
import { TopArticleComponent } from "./general-components/top-document/top-article/top-article.component";
import { PageArticleComponent } from "./page-article/page-article.component";
import { ListeArticleTileComponent } from "./general-components/liste-document-tile/liste-article-tile/liste-article-tile.component";
import { ListeArticleComponent } from "./general-components/page-document/liste-document/liste-article/liste-article.component";
import { ListeProjetComponent } from "./general-components/page-document/liste-document/liste-projet/liste-projet.component";
import { ListeProjetTileComponent } from "./general-components/liste-document-tile/liste-projet-tile/liste-projet-tile.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RejoindreLeClubComponent,
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
    ListeDocumentTileComponent,
    PagePolitiqueConfidentialiteComponent,
    PageMentionsLegalesComponent,
    PageDocumentsDetailComponent,
    ProjetDetailHeaderComponent,
    PageMembresDetailComponent,
    TopProjetComponent,
    CategoriesSelectorComponent,
    PageProjetComponent,
    PageProjetDetailComponent,
    PageArticleDetailComponent,
    TopArticleComponent,
    PageArticleComponent,
    ListeArticleTileComponent,
    ListeArticleComponent,
    ListeProjetComponent,
    ListeProjetTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true,
          breaks: true,
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
