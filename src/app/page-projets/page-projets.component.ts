import { Component } from '@angular/core';
import { DocumentType } from '../models/document';

@Component({
  selector: 'app-page-projets',
  templateUrl: './page-projets.component.html',
  styleUrls: ['./page-projets.component.css']
})
export class PageProjetsComponent {
  public typeOfDocuments: DocumentType = DocumentType.project; 
}

