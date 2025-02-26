import { Component, Input } from "@angular/core";
import { DocumentAndAuthor } from "src/app/models/document-and-author";
import { Document2 } from "src/app/models/document2";

export enum TileStyle {
  list = "list",
  box = "box",
}

@Component({
  selector: "app-top-document",
  templateUrl: "./top-document.component.html",
  styleUrls: ["./top-document.component.css"],
})
export class TopDocumentComponent {
  @Input() public documents: Document2[] = [];
  @Input() public numberOfDocuments: number = 3;

  ngOnInit() {
    this.documents = this.documents.slice(0, this.numberOfDocuments);
  }
}
