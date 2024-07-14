import { Component, Input } from "@angular/core";
import { DocumentService, SortingBy } from "src/app/interaction-backend/document.service";
import { DocumentAndAuthor } from "src/app/models/document-and-author";
import { Member } from "src/app/interaction-backend/member";
import { Document, DocumentType } from "src/app/models/document";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-top-project",
  templateUrl: "./top-project.component.html",
  styleUrls: ["./top-project.component.css"],
})
export class TopProjectComponent {

  // @Input() projects: DocumentAndAuthor[] = [];
  public topDocumentsAndAuthors: DocumentAndAuthor[] = [];

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {

  }
  
  fetchTopDocument() {
    this.route.data.subscribe(
        (data) => {
          data['topDocumentsAndAuthors'].forEach((projectAndAuthor: DocumentAndAuthor) => {
            projectAndAuthor.document.image_address = this.documentService.getDocumentImageURL(projectAndAuthor.document.type, projectAndAuthor.document.image_address);
            projectAndAuthor.document.content_address = this.documentService.getMarkdownURL(projectAndAuthor.document.type, projectAndAuthor.document.slug ,projectAndAuthor.document.content_address);
              this.topDocumentsAndAuthors.push(projectAndAuthor);
        });
        })
  }
  



  ngOnInit() {
    this.fetchTopDocument();
  }

}
