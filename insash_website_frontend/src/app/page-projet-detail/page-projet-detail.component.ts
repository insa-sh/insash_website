import { Component, Input } from "@angular/core";
import { PageDocumentsDetailComponent } from "../page-documents-detail/page-document-detail.component";
import { Projet } from "../models/projet";

@Component({
  selector: "app-page-projet-detail",
  templateUrl: "./page-projet-detail.component.html",
  styleUrls: ["../page-documents-detail/page-document-detail.component.css"],
})
export class PageProjetDetailComponent extends PageDocumentsDetailComponent {
  override document!: Projet;
}
