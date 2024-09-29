import { Component, Input } from "@angular/core";
import { DocumentAndAuthor } from "src/app/models/document-and-author";

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

  @Input() public documentsAndAuthors: DocumentAndAuthor[] = [];
  @Input() public numberOfDocuments: number = 3;
  @Input() public tileStyle: string = TileStyle.box;

  ngOnInit() {
    this.documentsAndAuthors = this.documentsAndAuthors.slice(0, this.numberOfDocuments);
  }

  

}
