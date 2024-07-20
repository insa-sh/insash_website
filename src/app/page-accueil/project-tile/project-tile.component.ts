import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentAndAuthor } from "src/app/models/document-and-author";



@Component({
  selector: "app-project-tile",
  templateUrl: "./project-tile.component.html",
  styleUrls: ["./project-tile.component.css"],
})
export class ProjectTileComponent {
  @Input() project!: DocumentAndAuthor;
  public MAX_TAGS: number = 3;

  getMaxTags(max: number) {
    return this.project.document.tags.slice(0, max);
  }

}
