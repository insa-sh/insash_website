import { Component } from '@angular/core';
import { DocumentType } from '../models/document';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.css']
})
export class PageNewsComponent {
  public title: string = "ASTUCES";
  public subtitle1: string = "Les dernières astuces";
  public subtitle2: string = "Toutes les astuces";
  public typeOfDocuments: DocumentType = DocumentType.news; 
}
