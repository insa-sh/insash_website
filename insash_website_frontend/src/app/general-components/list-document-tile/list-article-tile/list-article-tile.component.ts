import { Component, Input } from "@angular/core";
import { ListDocumentTileComponent } from "../list-document-tile.component";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-list-article-tile",
  templateUrl: "./list-article-tile.component.html",
  styleUrls: [
    "../list-document-tile.component.css",
    "./list-article-tile.component.css",
  ],
})
export class ListArticleTileComponent extends ListDocumentTileComponent {
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
