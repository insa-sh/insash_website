import { Component, inject } from "@angular/core";
import { DocumentService } from "../../interaction-backend/document.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Title, Meta } from "@angular/platform-browser";
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

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private meta: Meta
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
      if (data["document"] != null && data["document"]["data"].length > 0) {
        this.document = data["document"]["data"][0];
        this.titleService.setTitle("./insa.sh - " + this.document.titre);
        // Ajout SEO dynamique
        const description = this.document.description?.toString() || '';
        this.meta.updateTag({ name: 'description', content: description });
        this.meta.updateTag({
          name: 'keywords',
          content: this.document.tags
            ? this.document.tags.map((tag: any) => tag.titre).join(',') + ", insash, Club Info, INSA, INSA HdF, informatique, projet, article"
            : 'insash, Club Info, INSA, INSA HdF, informatique, projet, article',
        });
        this.meta.updateTag({ property: 'og:title', content: this.document.titre.toString() + " - ./insa.sh"  });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'og:type', content: 'article' });
        // s'il y a un ou plus auteur, on les ajoute tous
        if (this.document.auteur && this.document.auteur.length > 0) {
          this.meta.updateTag({ property: 'article:author', content: this.document.auteur.map((auteur: any) => auteur.nom).join(', ') });

        }

        if (this.document.image && this.document.image.url) {
          this.meta.updateTag({ property: 'og:image', content: this.BASE_URL + this.document.image.url });
        }
      } else {
        this.router.navigate(["/404"]);
      }
    });
  }
}
