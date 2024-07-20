import { Component } from '@angular/core';
import { DocumentType } from '../models/document';

@Component({
  selector: 'app-page-projets',
  templateUrl: './page-projets.component.html',
  styleUrls: ['./page-projets.component.css']
})
export class PageProjetsComponent {
  public title: string = "PROJETS";
  public subtitle1: string = "Projets en vedette";
  public subtitle2: string = "Tous les projets";
  public typeOfDocuments: DocumentType = DocumentType.project; 
}

