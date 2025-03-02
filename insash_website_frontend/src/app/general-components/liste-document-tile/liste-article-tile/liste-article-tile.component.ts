import { Component, Input } from "@angular/core";
import { ListeDocumentTileComponent } from "../liste-document-tile.component";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-liste-article-tile",
  templateUrl: "./liste-article-tile.component.html",
  styleUrls: [
    "../liste-document-tile.component.css",
    "./liste-article-tile.component.css",
  ],
})
export class ListeArticleTileComponent extends ListeDocumentTileComponent {
  @Input() override document!: Article;

  getDateString() {
    let date = new Date(this.document.date);

    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
