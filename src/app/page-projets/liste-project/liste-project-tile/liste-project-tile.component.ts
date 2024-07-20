import { Component, Input } from '@angular/core';
import { DocumentType } from 'src/app/models/document';
import { DocumentAndAuthor } from 'src/app/models/document-and-author';

@Component({
  selector: 'app-liste-project-tile',
  templateUrl: './liste-project-tile.component.html',
  styleUrls: ['./liste-project-tile.component.css']
})
export class ListeProjectTileComponent {
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
