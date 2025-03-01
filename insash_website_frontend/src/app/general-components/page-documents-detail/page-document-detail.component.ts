import { Component, inject } from "@angular/core";
import { DocumentAndAuthor } from "../../models/document-and-author";
import { DocumentService } from "../../interaction-backend/document.service";
import { DocumentType } from "../../models/document";
import { ActivatedRoute, Router } from "@angular/router";
import { first } from "rxjs";
import { Title } from "@angular/platform-browser";
import { Document2 } from "../../models/document2";
import { ApiService } from "../../interaction-backend/api.service";

@Component({
  selector: "app-page-document-detail",
  templateUrl: "./page-document-detail.component.html",
  styleUrls: ["./page-document-detail.component.css"],
})
export class PageDocumentsDetailComponent {
  public document!: Document2;
  public BASE_URL = ApiService.getBaseUrl();

  constructor(
    private documentService: DocumentService,
    private titleService: Title,
    private route: ActivatedRoute
  ) {}

  private router = inject(Router);

  ngOnInit() {
    this.fetchDocument();
  }

  getDateString() {
    let date = new Date(this.document.date);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  fetchDocument() {
    this.route.data.subscribe((data) => {
      if (data["document"] != null) {
        this.document = data["document"]["data"][0];

        this.titleService.setTitle("./insa.sh - " + this.document.titre);
      } else {
        this.router.navigate(["/404"]);
      }
    });
  }
}
