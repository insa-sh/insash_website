import { Component, Input } from "@angular/core";
import {
  DocumentService,
  SortingBy,
} from "../../interaction-backend/document.service";
import { DocumentAndAuthor } from "../../models/document-and-author";
import { DocumentType } from "../../models/document";
import { ActivatedRoute } from "@angular/router";
import { TileStyle } from "../top-document/top-document.component";
import { Document2 } from "src/app/models/document2";
import { Article } from "src/app/models/article";
import { Categorie } from "src/app/models/categorie";

@Component({
  selector: "app-page-document",
  templateUrl: "./page-document.component.html",
  styleUrls: ["./page-document.component.css"],
})
export class PageDocumentComponent {
  public documents: Article[] = [];
  public topDocuments: Document2[] = [];

  public categorie: Categorie = new Categorie("", "", "");

  public tileStyle: TileStyle = TileStyle.list;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute
  ) {}

  filters = {
    authors: [],
    tags: [],
    dates: [],
    sort: "",
    search: "",
  };

  fetchCategorie() {
    this.route.data.subscribe((data) => {
      if (data["categorie"] != null) {
        this.categorie = data["categorie"]["data"][0];
      }
    });
  }

  onFilterChanged(filters: any) {
    this.filters = filters;
    this.fetchDocuments();
  }

  fetchTopDocuments() {
    this.route.data.subscribe((data) => {
      if (data["topDocumentsAndAuthors"] != null) {
        this.topDocuments = data["topDocumentsAndAuthors"]["data"];
      }
    });
  }

  fetchDocuments() {
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
        this.categorie.slug,
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
      }
    });
  }

  ngOnInit() {
    this.fetchDocumentInit();
    this.fetchTopDocuments();
    this.fetchCategorie();
  }

  isThereEnoughDocuments() {
    return this.documents.length > 0;
  }

  isThereEnoughTopDocuments() {
    return this.topDocuments.length > 0;
  }
}
