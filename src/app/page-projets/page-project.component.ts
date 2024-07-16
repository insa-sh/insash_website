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

  filters = {
    authors: [],
    tags: [],
    dates: [],
    sort: ''
  };

  onFilterChanged(filters: any) {
    this.filters = filters;
    this.updateResults();
  }

  updateResults() {
    console.log('Filtres mis à jour:', this.filters);
  }

  fetchDocuments() {
    this.route.data.subscribe(
        (data) => {
          data['documentsAndAuthors'].forEach((documentAndAuthor: DocumentAndAuthor) => {
            documentAndAuthor.document.image_address = this.documentService.getDocumentImageURL(documentAndAuthor.document.type, documentAndAuthor.document.image_address);
            documentAndAuthor.document.content_address = this.documentService.getMarkdownURL(documentAndAuthor.document.type, documentAndAuthor.document.slug ,documentAndAuthor.document.content_address);
            this.documentsAndAuthors.push(documentAndAuthor);
          });
        })
  }


  ngOnInit() {
    this.fetchDocuments();
  }

  isThereEnoughDocuments() {
    return this.documentsAndAuthors.length > 0;
  }

}
