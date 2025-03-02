import { Component, Input } from "@angular/core";
import { ListeDocumentTileComponent } from "../liste-document-tile.component";
import { Projet } from "src/app/models/projet";

@Component({
  selector: "app-liste-projet-tile",
  templateUrl: "./liste-projet-tile.component.html",
  styleUrls: [
    "./liste-projet-tile.component.css",
    "../liste-document-tile.component.css",
  ],
})
export class ListeProjetTileComponent extends ListeDocumentTileComponent {
  @Input() override document!: Projet;

  getDateString() {
    let date = new Date(this.document.date);

    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
    });
  }
}
