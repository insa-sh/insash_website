import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { Member } from './member';
import { Document, DocumentType } from '../models/document';

export enum SortingBy {
  dateAsc = "date_asc",
  dateDesc = "date_desc",
  nameAsc = "name_asc",
  nameDesc = "name_desc",
}

const BASE_URL: string = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  // API URI
  
  constructor(private http: HttpClient) { }

  getDocument(documentType: DocumentType, tags: string[], search: string, uuid: string, slug: string, year: string[], sort: SortingBy = SortingBy.dateAsc, authors: string[], number?: number): Observable<Document> {
    
    let url: string = BASE_URL + "documents/" + documentType +"?";

    
      url += "sort=" + sort + "&";
    
    
      if (tags && tags.length > 0) {
        tags.forEach(tag => {
          url += "tag=" + tag + "&";
        });
      }

      if (authors && authors.length > 0) {
        authors.forEach(author => {
          url += "author=" + author + "&";
        });}

      if (search && search != "") {
        url += "search=" + search + "&";
      }
      if (uuid && uuid != "") {
        url += "uuid=" + uuid + "&";
      }
      if (slug && slug != "") {
        url += "slug=" + slug + "&";
      }
      if (number && number > 0) {
        url += "nbr=" + number + "&";
      }
      if (year && year.length > 0) {
        year.forEach(y => {
          url += "year=" + y + "&";
        });
      }

      return this.http.get<Document>(url);
    
  }

  getDocumentTags(documentType: DocumentType) {
    return this.http.get(BASE_URL + "documents/"+ documentType + "/tags");
  }

  getDocumentAuthor(documentType: DocumentType, slug: String) {
    return this.http.get(BASE_URL + "documents/" + documentType +"/authors/" + slug);
  }

  getMembers(status: String, surname: String) {

    let url: string = BASE_URL + "members?";

    if (status && status != "") {
      url += "status=" + status + "&";
    }

    if (surname && surname != "") {
      url += "surname=" + surname + "&";
    }

    return this.http.get<Member>(url);
  }

  // image = {slug}/{filename} (identique au contenu de la DB à l'attribut 'image_address')
  getDocumentImageURL(documentType: DocumentType, image: string): string {
    return BASE_URL + "images/documents/" +  documentType + "/" + image;
  }

  // image = {filename} (identique au contenu de la DB à l'attribut 'image')
  getMemberImageURL(image: string): string {
    return BASE_URL + "images/members/" + image;
  }

  // filename : identique au contenu de la DB à l'attribut 'content_address'
  getMarkdownURL(documentType: DocumentType, slug: String, filename: string): string {
    return BASE_URL + "markdown/documents/" + documentType + "/" + filename;
  }

}