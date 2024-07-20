import { Component, Input } from "@angular/core";
import { DocumentService, SortingBy } from "src/app/interaction-backend/document.service";
import { DocumentAndAuthor } from "src/app/models/document-and-author";
import { Member } from "src/app/interaction-backend/member";
import { Document, DocumentType } from "src/app/models/document";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-top-project",
  templateUrl: "./top-project.component.html",
  styleUrls: ["./top-project.component.css"],
})
export class TopProjectComponent {

  @Input() public documentsAndAuthors: DocumentAndAuthor[] = [];
  @Input() public numberOfDocuments: number = 3;

  ngOnInit() {
    this.documentsAndAuthors = this.documentsAndAuthors.slice(0, this.numberOfDocuments);
  }

  

}
