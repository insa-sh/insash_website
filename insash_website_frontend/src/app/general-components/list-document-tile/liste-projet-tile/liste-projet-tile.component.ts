import { Component, Input } from "@angular/core";
import { ListDocumentTileComponent } from "../list-document-tile.component";
import { Projet } from "src/app/models/projet";

@Component({
  selector: "app-liste-projet-tile",
  templateUrl: "./liste-projet-tile.component.html",
  styleUrls: [
    "./liste-projet-tile.component.css",
    "../list-document-tile.component.css",
  ],
})
export class ListeProjetTileComponent extends ListDocumentTileComponent {
  @Input() override document!: Projet;

  getDateString() {
    let date = new Date(this.document.date);

    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
    });
  }
}
