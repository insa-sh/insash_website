import { Component, Input } from "@angular/core";
import { Categorie } from "src/app/models/categorie";

@Component({
  selector: "app-categories-selector",
  templateUrl: "./categories-selector.component.html",
  styleUrls: ["./categories-selector.component.css"],
})
export class CategoriesSelectorComponent {
  @Input() public categorie = new Categorie("", "", "");
  @Input() public otherCategorie: Categorie[] = [];
}
