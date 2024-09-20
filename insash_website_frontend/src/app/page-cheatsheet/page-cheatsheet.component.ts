import { Component } from '@angular/core';
import { DocumentType } from '../models/document';

@Component({
  selector: 'app-page-cheatsheet',
  templateUrl: './page-cheatsheet.component.html',
  styleUrls: ['./page-cheatsheet.component.css']
})
export class PageCheatsheetComponent {
  public title: string = "CHEATSHEETS";
  public subtitle1: string = "Nos dernières fiches recapitulatives";
  public subtitle2: string = "Toutes les cheatsheets";
  public typeOfDocuments: DocumentType = DocumentType.cheatsheet; 
}
