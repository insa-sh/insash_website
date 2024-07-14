import { Component, Input } from '@angular/core';
import { DocumentService, SortingBy } from '../interaction-backend/document.service';
import { DocumentAndAuthor } from '../models/document-and-author';
import { Document, DocumentType } from '../models/document';
import { Member } from '../interaction-backend/member';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

const NBR_TOP_DOCUMENTS=2 ;

@Component({
  selector: 'app-page-projets',
  templateUrl: './page-project.component.html',
  styleUrls: ['./page-project.component.css']
})

export class PageProjectComponent {

  public documentsAndAuthors: DocumentAndAuthor[] = [];
  public topDocumentsAndAuthors: DocumentAndAuthor[] = [];


  public authors: Member[] = [];
  public tags: string[] = [];
  public dates: string[] = [];

  public selectedSortBy: SortingBy = SortingBy.dateAsc;
  public selectedTags: string[] = [];
  public selectedAuthors: string[] = [];
  public search: string = "";
  public selectedDates: string[] = [];

  @Input() typeOfDocuments: DocumentType = DocumentType.project; 
  @Input() title: string = "Nos projets";
  @Input() subtitle1: string = "Projets en vedette";
  @Input() subtitle2: string = "Tous les projets";

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {

  }

  fetchDocuments() {
    this.route.data.subscribe(
        (data) => {
          data['documentsAndAuthors'].forEach((projectAndAuthor: DocumentAndAuthor) => {
            projectAndAuthor.document.image_address = this.documentService.getDocumentImageURL(projectAndAuthor.document.type, projectAndAuthor.document.image_address);
            projectAndAuthor.document.content_address = this.documentService.getMarkdownURL(projectAndAuthor.document.type, projectAndAuthor.document.slug ,projectAndAuthor.document.content_address);
            this.documentsAndAuthors.push(projectAndAuthor);
            if (this.topDocumentsAndAuthors.length < NBR_TOP_DOCUMENTS) {
              this.topDocumentsAndAuthors.push(projectAndAuthor);
            }
          });
        })
  }

  



  ngOnInit() {
    this.fetchDocuments();
  }

  isThereEnoughTopDocuments() {
    return this.documentsAndAuthors.length >= NBR_TOP_DOCUMENTS;
  }

}
