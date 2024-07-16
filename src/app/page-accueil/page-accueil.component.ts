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

  @Input() public documentsAndAuthors: DocumentAndAuthor[] = [];

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {

  }
  
  fetchDocuments() {
    this.route.data.subscribe(
        (data) => {
          data['documentsAndAuthors'].forEach((documentsAndAuthor: DocumentAndAuthor) => {
            documentsAndAuthor.document.image_address = this.documentService.getDocumentImageURL(documentsAndAuthor.document.type, documentsAndAuthor.document.image_address);
            documentsAndAuthor.document.content_address = this.documentService.getMarkdownURL(documentsAndAuthor.document.type, documentsAndAuthor.document.slug ,documentsAndAuthor.document.content_address);
            
            this.documentsAndAuthors.push(documentsAndAuthor);
            
        });
        })
  }

  ngOnInit() {
    this.fetchDocuments();
  }
}
