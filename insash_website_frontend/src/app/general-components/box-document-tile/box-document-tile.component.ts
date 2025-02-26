import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentAndAuthor } from "src/app/models/document-and-author";
import { Projet } from "src/app/models/projet";
import { ApiService } from "src/app/interaction-backend/api.service";
import { Document2 } from "src/app/models/document2";

@Component({
  selector: "app-box-document-tile",
  templateUrl: "./box-document-tile.component.html",
  styleUrls: ["./box-document-tile.component.css"],
})
export class BoxDocumentTileComponent {
  @Input() document!: Document2;
  public MAX_TAGS: number = 3;
  public BASE_URL = ApiService.getBaseUrl();

  getMaxTags(max: number) {
    return this.document.tags?.slice(0, max);
  }
}
