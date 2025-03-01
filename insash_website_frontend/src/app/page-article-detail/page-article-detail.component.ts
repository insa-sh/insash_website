import { Component } from "@angular/core";
import { PageDocumentsDetailComponent } from "../general-components/page-documents-detail/page-document-detail.component";

@Component({
  selector: "app-page-article-detail",
  templateUrl: "./page-article-detail.component.html",
  styleUrls: ["./page-article-detail.component.css"],
})
export class PageArticleDetailComponent extends PageDocumentsDetailComponent {}
