import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { Member } from '../models/member';
import { Document, DocumentType } from '../models/document';
import { DocumentAndAuthor } from '../models/document-and-author';

export enum SortingBy {
  dateAsc = "date_asc",
  dateDesc = "date_desc",
  nameAsc = "name_asc",
  nameDesc = "name_desc",
}

const BASE_URL: string = "http://localhost/api/"

@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  
  constructor(private http: HttpClient) { }

  getDocument(documentType?: DocumentType, tags?: string[], search?: string, uuid?: string, slug?: string, year?: string[], sort: SortingBy = SortingBy.dateAsc, username?: string[], nbr?: number, archived?: boolean): Observable<DocumentAndAuthor> {
    
    let url: string = BASE_URL + "documents?";

    
      url += "sort=" + sort + "&";
    
    
      if (tags && tags.length > 0) {
        tags.forEach(tag => {
          url += "tag=" + tag + "&";
        });
      }

      if (documentType && documentType != null) {
        
          url += "type=" + documentType + "&";
        
      }

      if (username && username.length > 0) {
        username.forEach(u => {
          url += "username=" + u + "&";
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
      if (nbr && nbr > 0) {
        url += "nbr=" + nbr + "&";
      }
      if (year && year.length > 0) {
        year.forEach(y => {
          url += "year=" + y + "&";
        });
      }

      if (archived != undefined) {
        url += "archived=" + archived.toString() + "&";
      }

      return this.http.get<DocumentAndAuthor>(url);
    
  }

  getDocumentTags(documentType?: DocumentType, archived?: boolean): Observable<String> {

    let url = BASE_URL + "documents/tags?";

    if (documentType && documentType != null) {
      url += "type=" + documentType + "&";
    }
    if (archived != undefined) {
      url += "archived=" + archived.toString() + "&";
    }
    return this.http.get<String>(url);
  }

  getDocumentAuthors(documentType?: DocumentType, slug?: String, archived?: boolean): Observable<Member> {

    let url = BASE_URL + "documents/authors?";

    if (documentType && documentType != null) {
      url += "type=" + documentType + "&";
    }

    if (slug && slug != "") {
      url += "slug=" + slug + "&";
    }
    if (archived != undefined) {
      url += "archived=" + archived.toString() + "&";
    }

    return this.http.get<Member>(url);
  }

  getDocumentYears(documentType?: DocumentType, archived?: boolean): Observable<String> {

    let url = BASE_URL + "documents/years?";

    if (documentType && documentType != null) {
      url += "type=" + documentType + "&";
    }
    if (archived != undefined) {
      url += "archived=" + archived.toString() + "&";
    }
    return this.http.get<String>(url);
  }

  getMembers(status?: String, username?: String, archived?: boolean) {

    let url: string = BASE_URL + "members?";

    if (status && status != "") {
      url += "status=" + status + "&";
    }

    if (username && username != "") {
      url += "username=" + username + "&";
    }
    if (archived != undefined) {
      url += "archived=" + archived.toString() + "&";
    }
    return this.http.get<Member>(url);
  }

}
