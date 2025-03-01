import { Component, Input } from "@angular/core";
import { TopDocumentComponent } from "../top-document.component";

export enum TileStyle {
  list = "list",
  box = "box",
}

@Component({
  selector: "app-top-projet",
  templateUrl: "./top-projet.component.html",
  styleUrls: ["./top-projet.component.css", "../top-document.component.css"],
})
export class TopProjetComponent extends TopDocumentComponent {}
