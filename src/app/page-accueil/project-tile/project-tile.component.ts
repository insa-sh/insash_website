import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocumentAndAuthor } from "src/app/interaction-backend/document-and-author";

@Component({
  selector: "app-project-tile",
  templateUrl: "./project-tile.component.html",
  styleUrls: ["./project-tile.component.css"],
})
export class ProjectTileComponent {
  @Input() project!: DocumentAndAuthor;
}
