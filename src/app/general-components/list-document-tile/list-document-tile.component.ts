import { Component, Input } from '@angular/core';
import { DocumentType } from 'src/app/models/document';
import { DocumentAndAuthor } from 'src/app/models/document-and-author';

@Component({
  selector: 'app-list-document-tile',
  templateUrl: './list-document-tile.component.html',
  styleUrls: ['./list-document-tile.component.css']
})
export class ListDocumentTileComponent {
  @Input() documentAndAuthor!: DocumentAndAuthor;

  getYear(documentAndAuthor: DocumentAndAuthor): string {
    return documentAndAuthor.document.date.split('-')[0];
  }

  getDocumentType(): String {
    if (this.documentAndAuthor.document.type === DocumentType.project) {
      return "PROJETS";
    } else if (this.documentAndAuthor.document.type === DocumentType.cheatsheet) {
      return "CHEATSHEETS";
    } else if (this.documentAndAuthor.document.type === DocumentType.tips) {
      return "ASTUCES";
    } else {
      return "ACTUS";
    } 
  }

  ngOnInit() {
  }

}
