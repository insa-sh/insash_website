import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { Member } from './member';
import { Document } from './document';


export enum SortingByDate {
  Asc,
  Desc,
}

@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  // API URI
  private _url: string = "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  getArticle(tags: string[], search: string, uuid: string, slug: string, sort: SortingByDate = SortingByDate.Asc, number: number): Observable<Document> {
    let url: string = this._url + "documents/article?";
    if (sort != SortingByDate.Asc) {
      url += "sort=" + sort + "&";
    }
    
      if (tags && tags.length > 0) {
        tags.forEach(tag => {
          url += "tag=" + tag + "&";
        });
      }
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

      return this.http.get<Document>(url);
    
  }

  getProject(tags: string[], search: string, uuid: string, slug: string, sort: SortingByDate = SortingByDate.Asc, number: number): Observable<Document> {
    let url: string = this._url + "documents/project?";
    if (sort != SortingByDate.Asc) {
      url += "sort=" + sort + "&";
    }
    
    if (tags && tags.length > 0) {
      tags.forEach(tag => {
        url += "tag=" + tag + "&";
      });
    }
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

      return this.http.get<Document>(url);
  }

  getArticleTags(): any {
    return this.http.get(this._url + "documents/articleS/tags");
  }

  getProjectTags(): any {
    return this.http.get(this._url + "documents/project/tags");
  }

  getArticleAuthor(slug: String): any {
    return this.http.get(this._url + "documents/article/authors/" + slug);
  }

  getProjectAuthor(slug: String): any {
    return this.http.get(this._url + "documents/project/authors/" + slug);
  }

  getMembers(): Observable<Member> {
    return this.http.get<Member>(this._url + "members");
  }

  // image = {slug}/{filename} (identique au contenu de la DB à l'attribut 'image_address')
  getArticleImageURL(image: string): string {
    return this._url + "images/documents/article/" + image;
  }

  getProjectImageURL(image: string): string {
    return this._url + "images/documents/project/" + image;
  }

  // image = {filename} (identique au contenu de la DB à l'attribut 'image')
  getMemberImageURL(image: string): string {
    return this._url + "images/members/" + image;
  }

  // filename : identique au contenu de la DB à l'attribut 'content_address'
  getMarkdownURL(filename: string): string {
    return this._url + "documents/content/" + filename;
  }

}