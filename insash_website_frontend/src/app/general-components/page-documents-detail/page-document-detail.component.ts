import { Component, inject } from "@angular/core";
import { DocumentService } from "../../interaction-backend/document.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { Document } from "../../models/document";
import { ApiService } from "../../interaction-backend/api.service";

@Component({
  selector: "app-page-document-detail",
  templateUrl: "./page-document-detail.component.html",
  styleUrls: ["./page-document-detail.component.css"],
})
export class PageDocumentsDetailComponent {
  public document!: Document;
  public BASE_URL = ApiService.getBaseUrl();

  constructor(private titleService: Title, private route: ActivatedRoute) {}

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
      if (data["document"] != null && data["document"]["data"].length > 0) {
        this.document = data["document"]["data"][0];
        this.titleService.setTitle("./insa.sh - " + this.document.titre);
      } else {
        this.router.navigate(["/404"]);
      }
    });
  }
}
