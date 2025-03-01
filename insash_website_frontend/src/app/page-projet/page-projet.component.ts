import { Component, Input } from "@angular/core";
import {
  DocumentService,
  SortingBy,
} from "../interaction-backend/document.service";
import { ActivatedRoute } from "@angular/router";
import { TileStyle } from "../general-components/top-document/top-document.component";
import { Document } from "src/app/models/document";
import { Article } from "src/app/models/article";
import { PageDocumentComponent } from "../general-components/page-document/page-document.component";

@Component({
  selector: "app-page-projet",
  templateUrl: "./page-projet.component.html",
  styleUrls: [
    "../general-components/page-document/page-document.component.css",
    "./page-projet.component.css",
  ],
})
export class PageProjetComponent extends PageDocumentComponent {}
