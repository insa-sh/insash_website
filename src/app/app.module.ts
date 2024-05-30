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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
