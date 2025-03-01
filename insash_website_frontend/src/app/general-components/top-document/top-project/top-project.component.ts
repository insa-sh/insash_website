import { Component, Input } from "@angular/core";
import { Document2 } from "src/app/models/document2";
import { Projet } from "src/app/models/projet";
import { TopDocumentComponent } from "../top-document.component";

export enum TileStyle {
  list = "list",
  box = "box",
}

@Component({
  selector: "app-top-project",
  templateUrl: "./top-project.component.html",
  styleUrls: ["./top-project.component.css", "../top-document.component.css"],
})
export class TopProjectComponent extends TopDocumentComponent {}
