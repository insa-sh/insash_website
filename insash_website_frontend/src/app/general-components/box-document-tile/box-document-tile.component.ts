import { Component, Input } from "@angular/core";
import { ApiService } from "src/app/interaction-backend/api.service";
import { Document } from "src/app/models/document";

@Component({
  selector: "app-box-document-tile",
  templateUrl: "./box-document-tile.component.html",
  styleUrls: ["./box-document-tile.component.css"],
})
export class BoxDocumentTileComponent {
  @Input() document!: Document;
  public maxTags: number = 3;
  public BASE_URL = ApiService.getBaseUrl();

  getMaxTags(max: number) {
    return this.document.tags?.slice(0, max);
  }
}
