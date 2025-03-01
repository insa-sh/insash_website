import { Component } from "@angular/core";
import { PageDocumentComponent } from "../general-components/page-document/page-document.component";
import { Categorie } from "../models/categorie";

@Component({
  selector: "app-page-article",
  templateUrl: "./page-article.component.html",
  styleUrls: [
    "../general-components/page-document/page-document.component.css",
  ],
})
export class PageArticleComponent extends PageDocumentComponent {
  public categorie: Categorie = new Categorie("", "", "");

  fetchCategorie() {
    this.route.data.subscribe((data) => {
      if (data["categorie"] != null) {
        this.categorie = data["categorie"]["data"][0];
        this.titleService.setTitle("./insa.sh - " + this.categorie.titre);
      }
    });
  }

  override onFilterChanged(filters: any) {
    this.filters = filters;
    this.fetchDocuments(this.categorie);
  }

  override fetchDocumentInit() {
    this.route.data.subscribe((data) => {
      if (data["document"] != null) {
        this.documents = data["document"]["data"];
        this.topDocuments = this.documents.slice(0, 2);
      }
    });
  }

  override ngOnInit() {
    super.ngOnInit();
    this.fetchCategorie();
  }
}
