import { Component } from '@angular/core';
import { DocumentType } from '../models/document';

@Component({
  selector: 'app-page-tips',
  templateUrl: './page-tips.component.html',
  styleUrls: ['./page-tips.component.css']
})
export class PageTipsComponent {
  public title: string = "ASTUCES";
  public subtitle1: string = "Nos dernières astuces";
  public subtitle2: string = "Toutes nos astuces";
  public typeOfDocuments: DocumentType = DocumentType.tips; 
}
