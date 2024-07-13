import { Component, Input } from '@angular/core';
import { DocumentAndAuthor } from 'src/app/models/document-and-author';

@Component({
  selector: 'app-liste-project',
  templateUrl: './liste-project.component.html',
  styleUrls: ['./liste-project.component.css']
})
export class ListeProjectComponent {
  @Input() documentsAndAuthors!: DocumentAndAuthor[];
}
