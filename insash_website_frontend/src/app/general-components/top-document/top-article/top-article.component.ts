import { Component, Input } from "@angular/core";
import { Document } from "src/app/models/document";
import { TopDocumentComponent } from "../top-document.component";

@Component({
  selector: "app-top-article",
  templateUrl: "./top-article.component.html",
  styleUrls: ["./top-article.component.css", "../top-document.component.css"],
})
export class TopArticleComponent extends TopDocumentComponent {}
