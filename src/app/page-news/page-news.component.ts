import { Component } from '@angular/core';
import { DocumentType } from '../models/document';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.css']
})
export class PageNewsComponent {
  public title: string = "ACTUS";
  public subtitle1: string = "Les dernières news du Club Info";
  public subtitle2: string = "Toutes nos actus";
  public typeOfDocuments: DocumentType = DocumentType.news; 
}
