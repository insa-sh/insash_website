import { Component, Input } from "@angular/core";
import { DocumentAndAuthor } from "src/app/models/document-and-author";
import { Document2 } from "src/app/models/document2";
import { Projet } from "src/app/models/projet";

@Component({
  selector: "app-project-detail-header",
  templateUrl: "./project-detail-header.component.html",
  styleUrls: ["./project-detail-header.component.css"],
})
export class ProjectDetailHeaderComponent {
  @Input() public project!: Projet;
}
