import { Component, Input } from "@angular/core";
import { DocumentService } from "../interaction-backend/document.service";
import { ActivatedRoute } from "@angular/router";
import { DocumentAndAuthor } from "../models/document-and-author";

const NUMBER_OF_TOP_DOCUMENTS = 3;

@Component({
  selector: "app-page-accueil",
  templateUrl: "./page-accueil.component.html",
  styleUrls: ["./page-accueil.component.css"],
})
export class PageAccueilComponent {
  public title = "Site Web du Club Info";

  @Input() public topDocumentsAndAuthors: DocumentAndAuthor[] = [];

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {

  }
  
  fetchTopDocuments() {
    this.route.data.subscribe(
        (data) => {
          if (data['topDocumentsAndAuthors'] != null) {

              this.topDocumentsAndAuthors = data['topDocumentsAndAuthors'];
              

          }
        })
  }

  ngOnInit() {
    this.fetchTopDocuments();
  }
}
