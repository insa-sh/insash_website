import { Component, Input } from '@angular/core';
import { DocumentService, SortingBy } from '../interaction-backend/document.service';
import { DocumentAndAuthor } from '../models/document-and-author';
import { Document, DocumentType } from '../models/document';
import { Member } from '../interaction-backend/member';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-page-projets',
  templateUrl: './page-project.component.html',
  styleUrls: ['./page-project.component.css']
})

export class PageProjectComponent {

  public documentsAndAuthors: DocumentAndAuthor[] = [];
  public topDocumentsAndAuthors: DocumentAndAuthor[] = [];

  @Input() typeOfDocuments: DocumentType = DocumentType.project; 
  @Input() title: string = "Nos projets";
  @Input() subtitle1: string = "Projets en vedette";
  @Input() subtitle2: string = "Tous les projets";

  constructor(private documentService: DocumentService, private route: ActivatedRoute) {

  }

  filters = {
    authors: [],
    tags: [],
    dates: [],
    sort: '',
    search: ''
  };

  onFilterChanged(filters: any) {
    this.filters = filters;
    this.fetchDocuments();
  }

  fetchTopDocuments() {
    this.route.data.subscribe(
        (data) => {
          data['topDocumentsAndAuthors'].forEach((documentsAndAuthor: DocumentAndAuthor) => {
            documentsAndAuthor.document.image_address = this.documentService.getDocumentImageURL(documentsAndAuthor.document.type, documentsAndAuthor.document.image_address);
            documentsAndAuthor.document.content_address = this.documentService.getMarkdownURL(documentsAndAuthor.document.type, documentsAndAuthor.document.slug ,documentsAndAuthor.document.content_address);
            
            this.topDocumentsAndAuthors.push(documentsAndAuthor);
            
        });
        })
  }

  fetchDocuments() {

    let sort : SortingBy = SortingBy.dateDesc;
    if (this.filters.sort === "Plus récent") {
      sort = SortingBy.dateDesc;
    } else if (this.filters.sort === "Plus ancien") {
      sort = SortingBy.dateAsc;
    } else if (this.filters.sort === "A-Z") {
      sort = SortingBy.nameAsc;
    } else if (this.filters.sort === "Z-A") {
      sort = SortingBy.nameDesc;
    }

    let search = this.filters.search.length > 3 ? this.filters.search : "";

    this.documentService.getDocument(this.typeOfDocuments, this.filters.tags, search, "", "", this.filters.dates, sort, this.filters.authors).subscribe(
        (data: any) => {
          if (data) {
            this.documentsAndAuthors = data.map((documentAndAuthor: DocumentAndAuthor) => {
              documentAndAuthor.document.image_address = this.documentService.getDocumentImageURL(documentAndAuthor.document.type, documentAndAuthor.document.image_address);
              documentAndAuthor.document.content_address = this.documentService.getMarkdownURL(documentAndAuthor.document.type, documentAndAuthor.document.slug ,documentAndAuthor.document.content_address);
              return documentAndAuthor;
            });
          } else {
            this.documentsAndAuthors = [];
          }
          
        })
  }


  ngOnInit() {
    this.fetchDocuments();
    this.fetchTopDocuments();
  }

  isThereEnoughDocuments() {
    return this.documentsAndAuthors.length > 0;
  }

  isThereEnoughTopDocuments() {
    return this.topDocumentsAndAuthors.length > 0;
  }

}
