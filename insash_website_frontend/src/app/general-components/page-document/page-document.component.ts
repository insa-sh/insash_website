import { Component, Input } from "@angular/core";
import {
  DocumentService,
  SortingBy,
} from "../../interaction-backend/document.service";
import { ActivatedRoute } from "@angular/router";
import { Document } from "src/app/models/document";
import { Categorie } from "src/app/models/categorie";

@Component({
  selector: "app-page-document",
  templateUrl: "./page-document.component.html",
  styleUrls: ["./page-document.component.css"],
})
export class PageDocumentComponent {
  public documents: Document[] = [];
  public topDocuments: Document[] = [];

  constructor(
    private documentService: DocumentService,
    protected route: ActivatedRoute
  ) {}

  filters = {
    authors: [],
    tags: [],
    dates: [],
    sort: "",
    search: "",
  };

  onFilterChanged(filters: any) {
    this.filters = filters;
    this.fetchDocuments();
  }

  fetchDocuments(categorie?: Categorie) {
    let sort: SortingBy = SortingBy.dateDesc;
    if (this.filters.sort === "Plus récent") {
      sort = SortingBy.dateDesc;
    } else if (this.filters.sort === "Plus ancien") {
      sort = SortingBy.dateAsc;
    } else if (this.filters.sort === "A-Z") {
      sort = SortingBy.nameAsc;
    } else if (this.filters.sort === "Z-A") {
      sort = SortingBy.nameDesc;
    }

    let search = this.filters.search.length >= 3 ? this.filters.search : "";

    this.documentService
      .getArticle(
        categorie ? categorie.slug : "",
        this.filters.tags,
        search,
        "",
        "",
        this.filters.dates,
        sort,
        this.filters.authors,
        undefined
      )
      .subscribe((data: any) => {
        if (data) {
          this.documents = data["data"];
        } else {
          this.documents = [];
        }
      });
  }

  fetchDocumentInit() {
    this.route.data.subscribe((data) => {
      if (data["document"] != null) {
        this.documents = data["document"]["data"];
        this.topDocuments = this.documents.slice(0, 2);
      }
    });
  }

  ngOnInit() {
    this.fetchDocumentInit();
  }

  isThereEnoughDocuments() {
    return this.documents.length > 0;
  }

  isThereEnoughTopDocuments() {
    return this.topDocuments.length > 0;
  }
}
