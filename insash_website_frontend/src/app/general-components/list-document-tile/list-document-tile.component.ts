import { Component, Input } from "@angular/core";
import { ApiService } from "src/app/interaction-backend/api.service";
import { Article } from "src/app/models/article";
import { Document } from "src/app/models/document";
import { Projet } from "src/app/models/projet";

@Component({
  selector: "app-list-document-tile",
  templateUrl: "./list-document-tile.component.html",
  styleUrls: ["./list-document-tile.component.css"],
})
export class ListDocumentTileComponent {
  @Input() document!: Document;
  public MAX_TAGS: number = 3;
  public BASE_URL = ApiService.getBaseUrl();

  getYear(document: Document): string {
    return document.date.split("-")[0];
  }

  getArticleCategorie() {
    if ("categorie" in this.document) {
      return (this.document as Article).categorie.slug;
    } else {
      return "projet";
    }
  }

  getDateString() {
    let date = new Date(this.document.date);
    if (this.document instanceof Projet) {
      return date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
      });
    } else {
      return date.toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }

  getMaxTags(max: number) {
    return this.document.tags?.slice(0, max);
  }

  getNumberOfTags() {
    if (this.document.tags === undefined) {
      return 0;
    }
    return this.document.tags!.length;
  }

  ngOnInit() {}
}
