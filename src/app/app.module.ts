import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FooterComponent } from "./footer/footer.component";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { PageAccueilComponent } from "./page-accueil/page-accueil.component";
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProjectTileComponent } from "./page-accueil/project-tile/project-tile.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageAccueilComponent,
    PageNotFoundComponent,
    ProjectTileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
