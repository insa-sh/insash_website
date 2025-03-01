import { Component } from "@angular/core";
import { Categorie } from "src/app/models/categorie";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-categories-selector",
  templateUrl: "./categories-selector.component.html",
  styleUrls: ["./categories-selector.component.css"],
})
export class CategoriesSelectorComponent {
  public categorie = new Categorie("", "", "");
  public otherCategorie: Categorie[] = [];

  constructor(private route: ActivatedRoute) {}

  fetchOtherCategorie() {
    this.route.data.subscribe((data) => {
      if (data["categories"] != null) {
        this.otherCategorie = data["categories"]["data"];
      }
    });
  }

  getCategorie() {
    this.route.data.subscribe((data) => {
      if (data["categorie"] != null) {
        this.categorie = data["categorie"]["data"][0];
      }
    });
  }

  ngOnInit() {
    this.fetchOtherCategorie();
    this.getCategorie();

    this.otherCategorie = this.otherCategorie.filter(
      (v) => v.slug != this.categorie.slug
    );
  }
}
