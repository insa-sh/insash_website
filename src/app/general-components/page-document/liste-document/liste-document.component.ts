import { Component, Input } from '@angular/core';
import { DocumentAndAuthor } from 'src/app/models/document-and-author';

@Component({
  selector: 'app-liste-document',
  templateUrl: './liste-document.component.html',
  styleUrls: ['./liste-document.component.css']
})
export class ListeDocumentComponent {
  @Input() documentsAndAuthors!: DocumentAndAuthor[];

  isThereEnoughDocuments() {
    return this.documentsAndAuthors.length > 0;
  }

}
