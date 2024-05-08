import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Project } from "src/app/models/project";

@Component({
  selector: "app-project-tile",
  templateUrl: "./project-tile.component.html",
  styleUrls: ["./project-tile.component.css"],
})
export class ProjectTileComponent {
  @Input() project!: Project;
}
