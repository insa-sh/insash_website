import { Component, Input } from "@angular/core";
import { DocumentAndAuthor } from "src/app/models/document-and-author";

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
