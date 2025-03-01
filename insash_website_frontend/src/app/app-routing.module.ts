import { ApplicationConfig, Injectable, NgModule } from "@angular/core";
import {
  RouterModule,
  RouterStateSnapshot,
  Routes,
  TitleStrategy,
  provideRouter,
} from "@angular/router";
import { PageAccueilComponent } from "./page-accueil/page-accueil.component";
import { PageMembresComponent } from "./page-membres/page-membres.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Title } from "@angular/platform-browser";
import { PageDocumentComponent } from "./general-components/page-document/page-document.component";
import {
  ArticleAuthorResolver,
  ArticleTagsResolver,
  ArticleYearResolver,
  MemberResolver,
  ProjectResolver,
  TopArticleResolver,
  TopProjectResolver,
  ProjetYearResolver,
  ArticleResolver,
  ProjetAuthorResolver,
  ProjetTagsResolver,
  ArticleCategorieResolver,
  CategorieResolver,
} from "./interaction-backend/resolver/document.resolver";
import { PagePolitiqueConfidentialiteComponent } from "./page-politique-confidentialite/page-politique-confidentialite.component";
import { PageMentionsLegalesComponent } from "./page-mentions-legales/page-mentions-legales.component";
import { PageDocumentsDetailComponent } from "./page-documents-detail/page-document-detail.component";
import { PageMembresDetailComponent } from "./page-membres-detail/page-membres-detail.component";
import { PageProjetComponent } from "./general-components/page-projet/page-projet.component";
import { PageProjetDetailComponent } from "./page-projet-detail/page-projet-detail.component";

// iumporter la fonction qui permet de fermer le menu de navigation au changement de page
declare function toggleNavigationMenu(action: any): void;

const routes: Routes = [
  {
    path: "",
    component: PageAccueilComponent,
    title: "Club Info INSA Hauts-de-France",
    resolve: {
      topProjects: TopProjectResolver,
      topDocuments: TopArticleResolver,
    },
  },

  {
    path: "les-membres",
    component: PageMembresComponent,
    title: "L'équipe du Club Info",
    resolve: {
      members: MemberResolver,
    },
  },
  {
    path: "les-membres/:username",
    component: PageMembresDetailComponent,
    title: "",
    resolve: {
      member: MemberResolver,
      project: ProjectResolver,
    },
  },
  {
    path: "project",
    component: PageProjetComponent,
    title: "Les projets du Club",
    resolve: {
      document: ProjectResolver,
      topDocumentsAndAuthors: TopProjectResolver,
      documentTags: ProjetTagsResolver,
      documentAuthors: ProjetAuthorResolver,
      documentYears: ProjetYearResolver,
    },
  },
  {
    path: "project/:slug",
    component: PageProjetDetailComponent,
    title: "",
    resolve: {
      document: ProjectResolver,
    },
  },
  {
    path: "article/:categorie",
    component: PageDocumentComponent,
    title: "Les cheatsheets du Club",
    resolve: {
      document: ArticleResolver,
      topDocumentsAndAuthors: TopArticleResolver,
      documentTags: ArticleTagsResolver,
      documentAuthors: ArticleAuthorResolver,
      documentYears: ArticleYearResolver,
      categories: ArticleCategorieResolver,
      categorie: CategorieResolver,
    },
    runGuardsAndResolvers: "always",
  },
  {
    path: "article/:categorie/:slug",
    component: PageDocumentsDetailComponent,
    title: "",
    resolve: {
      document: ArticleResolver,
    },
  },
  {
    path: "politique-confidentialite",
    component: PagePolitiqueConfidentialiteComponent,
    title: "Politique de confidentialité",
  },
  {
    path: "mentions-legales",
    component: PageMentionsLegalesComponent,
    title: "Mentions légales",
  },

  // à mettre à la fin des liens sinon ça ne marche pas ("s'applique à tous les autres liens")
  { path: "**", component: PageNotFoundComponent, title: "Page not found :(" },
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`./insa.sh - ${title}`);
    }
    toggleNavigationMenu("close");
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
})
export class AppRoutingModule {}
