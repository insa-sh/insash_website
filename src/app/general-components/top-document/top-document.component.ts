import { Component, Input } from "@angular/core";
import { DocumentAndAuthor } from "src/app/models/document-and-author";

@Component({
  selector: "app-top-document",
  templateUrl: "./top-document.component.html",
  styleUrls: ["./top-document.component.css"],
})
export class TopDocumentComponent {

  @Input() public documentsAndAuthors: DocumentAndAuthor[] = [];
  @Input() public numberOfDocuments: number = 3;

  ngOnInit() {
    this.documentsAndAuthors = this.documentsAndAuthors.slice(0, this.numberOfDocuments);
  }

  

}
