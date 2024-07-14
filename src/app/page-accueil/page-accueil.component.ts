import { Component, Input } from "@angular/core";
import { DocumentService } from "../interaction-backend/document.service";
import { ActivatedRoute } from "@angular/router";
import { DocumentAndAuthor } from "../models/document-and-author";



@Component({
  selector: "app-page-accueil",
  templateUrl: "./page-accueil.component.html",
  styleUrls: ["./page-accueil.component.css"],
})
export class PageAccueilComponent {
  public title = "Site Web du Club Info";

}
