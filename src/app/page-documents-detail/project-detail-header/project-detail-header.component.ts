import { Component, Input } from '@angular/core';
import { DocumentAndAuthor } from 'src/app/models/document-and-author';

@Component({
  selector: 'app-project-detail-header',
  templateUrl: './project-detail-header.component.html',
  styleUrls: ['./project-detail-header.component.css']
})
export class ProjectDetailHeaderComponent {
  @Input() public project!: DocumentAndAuthor;
}
