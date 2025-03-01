import { Component, Input } from "@angular/core";
import {
  DocumentService,
  SortingBy,
} from "../interaction-backend/document.service";
import { ActivatedRoute } from "@angular/router";
import { TileStyle } from "../general-components/top-document/top-document.component";
import { Document2 } from "src/app/models/document2";
import { Article } from "src/app/models/article";
import { Categorie } from "src/app/models/categorie";
import { Projet } from "src/app/models/projet";

@Component({
  selector: "app-page-projet",
  templateUrl: "./page-projet.component.html",
  styleUrls: ["./page-projet.component.css"],
})
export class PageProjetComponent {
  public documents: Projet[] = [];
  public topDocuments: Document2[] = [];

  public tileStyle: TileStyle = TileStyle.box;

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
      .getProjet(
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
  }

  isThereEnoughDocuments() {
    return this.documents.length > 0;
  }

  isThereEnoughTopDocuments() {
    return this.topDocuments.length > 0;
  }
}
