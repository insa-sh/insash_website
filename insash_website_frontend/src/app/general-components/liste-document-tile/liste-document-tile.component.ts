import { Component, Input } from "@angular/core";
import { ApiService } from "src/app/interaction-backend/api.service";
import { Document } from "src/app/models/document";
import { Projet } from "src/app/models/projet";

@Component({
  selector: "app-liste-document-tile",
  templateUrl: "./liste-document-tile.component.html",
  styleUrls: ["./liste-document-tile.component.css"],
})
export class ListeDocumentTileComponent {
  @Input() document!: Document;
  public maxTags: number = 3;
  public BASE_URL = ApiService.getBaseUrl();

  getMaxTags(max: number) {
    return this.document.tags?.slice(0, max);
  }

  getNumberOfTags() {
    if (this.document.tags === undefined) {
      return 0;
    }
    return this.document.tags!.length;
  }
}
