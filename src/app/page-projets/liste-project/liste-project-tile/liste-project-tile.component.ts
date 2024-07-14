import { Component, Input } from '@angular/core';
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

  ngOnInit() {
  }

}
