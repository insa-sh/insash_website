import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentAndAuthor } from "src/app/models/document-and-author";



@Component({
  selector: "app-box-document-tile",
  templateUrl: "./box-document-tile.component.html",
  styleUrls: ["./box-document-tile.component.css"],
})
export class BoxDocumentTileComponent {
  @Input() documentAndAuthor!: DocumentAndAuthor;
  public MAX_TAGS: number = 3;

  getMaxTags(max: number) {
    return this.documentAndAuthor.document.tags.slice(0, max);
  }

}
