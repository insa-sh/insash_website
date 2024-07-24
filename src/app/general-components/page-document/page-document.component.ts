import { Component, Input } from '@angular/core';
import { DocumentService, SortingBy } from '../../interaction-backend/document.service';
import { DocumentAndAuthor } from '../../models/document-and-author';
import { DocumentType } from '../../models/document';
import { ActivatedRoute } from '@angular/router';
import { TileStyle } from '../top-document/top-document.component';

@Component({
  selector: 'app-page-document',
  templateUrl: './page-document.component.html',
  styleUrls: ['./page-document.component.css']
})

export class PageDocumentComponent {

  public documentsAndAuthors: DocumentAndAuthor[] = [];
  public topDocumentsAndAuthors: DocumentAndAuthor[] = [];

  @Input() typeOfDocuments: DocumentType = DocumentType.project; 
  @Input() title: string = "PROJETS";
  @Input() subtitle1: string = "Projets en vedette";
  @Input() subtitle2: string = "Tous les projets";

  public tileStyle: TileStyle = TileStyle.box;

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
          if (data['topDocumentsAndAuthors'] != null) {
            data['topDocumentsAndAuthors'].forEach((documentsAndAuthor: DocumentAndAuthor) => {
              documentsAndAuthor.document.image_address = this.documentService.getDocumentImageURL(documentsAndAuthor.document.type, documentsAndAuthor.document.image_address);
              if (documentsAndAuthor.document.content_address.String != "") {
              documentsAndAuthor.document.content_address.String = this.documentService.getMarkdownURL(documentsAndAuthor.document.type, documentsAndAuthor.document.slug ,documentsAndAuthor.document.content_address.String);
              }
              this.topDocumentsAndAuthors.push(documentsAndAuthor);
              
          });
          }
          
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

    let search = this.filters.search.length >= 3 ? this.filters.search : "";

    this.documentService.getDocument(this.typeOfDocuments, this.filters.tags, search, "", "", this.filters.dates, sort, this.filters.authors, undefined, false).subscribe(
        (data: any) => {
          if (data) {
            this.documentsAndAuthors = data.map((documentAndAuthor: DocumentAndAuthor) => {
              documentAndAuthor.document.image_address = this.documentService.getDocumentImageURL(documentAndAuthor.document.type, documentAndAuthor.document.image_address);
              if (documentAndAuthor.document.content_address.String != "") {
              documentAndAuthor.document.content_address.String = this.documentService.getMarkdownURL(documentAndAuthor.document.type, documentAndAuthor.document.slug ,documentAndAuthor.document.content_address.String);
              }
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
    this.tileStyle = this.typeOfDocuments == DocumentType.project ? TileStyle.box : TileStyle.list;
  }

  isThereEnoughDocuments() {
    return this.documentsAndAuthors.length > 0;
  }

  isThereEnoughTopDocuments() {
    return this.topDocumentsAndAuthors.length > 0;
  }

}
