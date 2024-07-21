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
import { CheatsheetAuthorResolver, CheatsheetTagsResolver, CheatsheetYearResolver, MemberResolver, NewsAuthorResolver, NewsTagsResolver, ProjectAuthorResolver, ProjectResolver, ProjectTagsResolver, ProjectYearResolver, TipsAuthorResolver, TipsTagsResolver, TipsYearResolver, TopCheatsheetResolver, TopNewsResolver, TopProjectResolver, TopTipsResolver } from "./interaction-backend/resolver/document.resolver";
import { PageProjetsComponent } from "./page-projets/page-projets.component";
import { PageCheatsheetComponent } from "./page-cheatsheet/page-cheatsheet.component";
import { PageTipsComponent } from "./page-tips/page-tips.component";
import { PageNewsComponent } from "./page-news/page-news.component";



// iumporter la fonction qui permet de fermer le menu de navigation au changement de page
declare function toggleNavigationMenu(action : any): void;


const routes: Routes = [
  {
    path: "",
    component: PageAccueilComponent,
    title: "Club Info INSA Hauts-de-France",
    resolve: {
      topDocumentsAndAuthors: TopProjectResolver,
    }
  },
  
  {
    path : "les-membres",
    component: PageMembresComponent,
    title: "L'équipe du Club Info",
    resolve: {
      members: MemberResolver,
    }


    
  },
  {
    path : "project",
    component: PageProjetsComponent,
    title: "Les projets du Club",
    resolve: {
      topDocumentsAndAuthors: TopProjectResolver,
      documentTags: ProjectTagsResolver,
      documentAuthors : ProjectAuthorResolver, 
      documentYears : ProjectYearResolver,
    }
  },
  {
    path : "cheatsheet",
    component: PageCheatsheetComponent,
    title: "Les cheatsheets du Club",
    resolve: {
      topDocumentsAndAuthors: TopCheatsheetResolver,
      documentTags: CheatsheetTagsResolver,
      documentAuthors : CheatsheetAuthorResolver, 
      documentYears : CheatsheetYearResolver,
    }
  },
  {
    path : "news",
    component: PageNewsComponent,
    title: "Les actus du Club",
    resolve: {
      topDocumentsAndAuthors: TopNewsResolver,
      documentTags: NewsTagsResolver,
      documentAuthors : NewsAuthorResolver, 
      documentYears : NewsAuthorResolver,
    }
  },
  {
    path : "tips",
    component: PageTipsComponent,
    title: "Les astuces du Club",
    resolve: {
      topDocumentsAndAuthors: TopTipsResolver,
      documentTags: TipsTagsResolver,
      documentAuthors : TipsAuthorResolver, 
      documentYears : TipsYearResolver,
    }
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
