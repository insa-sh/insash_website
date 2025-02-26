import { Component, Input } from "@angular/core";
import { Document2 } from "src/app/models/document2";
import { Projet } from "src/app/models/projet";

export enum TileStyle {
  list = "list",
  box = "box",
}

@Component({
  selector: "app-top-project",
  templateUrl: "./top-project.component.html",
  styleUrls: ["./top-project.component.css"],
})
export class TopProjectComponent {
  @Input() public documents: Document2[] = [];
  @Input() public numberOfDocuments: number = 3;

  ngOnInit() {
    this.documents = this.documents.slice(0, this.numberOfDocuments);
  }
}
