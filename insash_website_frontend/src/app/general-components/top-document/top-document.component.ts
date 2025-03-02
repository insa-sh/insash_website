import { Component, Input } from "@angular/core";
import { Document } from "src/app/models/document";

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
  @Input() public document: Document[] = [];
  @Input() public numberOfDocument: number = 3;

  ngOnInit() {
    this.document = this.document.slice(0, this.numberOfDocument);
    console.log(this.document);
  }
}
