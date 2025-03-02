import { Component, Input } from "@angular/core";
import { TopDocumentComponent } from "../top-document.component";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-top-article",
  templateUrl: "./top-article.component.html",
  styleUrls: ["./top-article.component.css", "../top-document.component.css"],
})
export class TopArticleComponent extends TopDocumentComponent {
  @Input() override document: Article[] = [];
}
