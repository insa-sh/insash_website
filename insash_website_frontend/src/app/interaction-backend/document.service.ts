import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Member } from "../models/member";
import { Document, DocumentType } from "../models/document";
import { DocumentAndAuthor } from "../models/document-and-author";
import { ApiService } from "./api.service";

export enum SortingBy {
  dateAsc = "date_asc",
  dateDesc = "date_desc",
  nameAsc = "name_asc",
  nameDesc = "name_desc",
}

@Injectable({
  providedIn: "root",
})
export class DocumentService {
  constructor(private http: HttpClient) {}

  BASE_URL = ApiService.getBaseUrl() + "/api/";

  getArticle(
    categorie?: DocumentType,
    tags?: string[],
    search?: string,
    documentId?: string,
    slug?: string,
    year?: string[],
    sort: SortingBy = SortingBy.dateAsc,
    username?: string[],
    nbr?: number
  ): Observable<DocumentAndAuthor> {
    let url: string = this.BASE_URL + "articles?";

    switch (sort) {
      case SortingBy.dateAsc:
        url += "sort=date&";
        break;

      case SortingBy.dateDesc:
        url += "sort=date:desc&";
        break;

      case SortingBy.nameAsc:
        url += "sort=titre&";
        break;

      case SortingBy.nameDesc:
        url += "sort=titre:desc&";
        break;

      default:
        break;
    }

    if (tags && tags.length > 0) {
      tags.forEach((tag) => {
        url += "tag=" + tag + "&";
      });
    }

    if (categorie && categorie != null) {
      url += "type=" + categorie + "&";
    }

    if (username && username.length > 0) {
      username.forEach((u) => {
        url += "populate[auteur][filters][username][$eq]=" + u + "&";
      });
    }

    if (search && search != "") {
      url += "filters[titre][$in]=" + search + "&";
    }
    if (documentId && documentId != "") {
      url += "filters[documentId][$in]=" + documentId + "&";
    }
    if (slug && slug != "") {
      url += "filters[slug][$eq]=" + slug + "&";
    }
    if (nbr && nbr > 0) {
      url += "nbr=" + nbr + "&";
    }
    if (year && year.length > 0) {
      year.forEach((y) => {
        url +=
          "filters[date][$gte]=" +
          year +
          "-01-01&filters[date][$lte]=" +
          year +
          "-12-31";
      });
    }

    return this.http.get<DocumentAndAuthor>(url);
  }

  getProjet(
    tags?: string[],
    search?: string,
    documentId?: string,
    slug?: string,
    year?: string[],
    sort: SortingBy = SortingBy.dateAsc,
    username?: string[],
    nbr?: number
  ): Observable<DocumentAndAuthor> {
    let url: string = this.BASE_URL + "articles?";

    switch (sort) {
      case SortingBy.dateAsc:
        url += "sort=date&";
        break;

      case SortingBy.dateDesc:
        url += "sort=date:desc&";
        break;

      case SortingBy.nameAsc:
        url += "sort=titre&";
        break;

      case SortingBy.nameDesc:
        url += "sort=titre:desc&";
        break;

      default:
        break;
    }

    if (tags && tags.length > 0) {
      tags.forEach((tag) => {
        url += "tag=" + tag + "&";
      });
    }

    if (username && username.length > 0) {
      username.forEach((u) => {
        url += "populate[auteur][filters][username][$eq]=" + u + "&";
      });
    }

    if (search && search != "") {
      url += "filters[titre][$in]=" + search + "&";
    }
    if (documentId && documentId != "") {
      url += "filters[documentId][$in]=" + documentId + "&";
    }
    if (slug && slug != "") {
      url += "filters[slug][$eq]=" + slug + "&";
    }
    if (nbr && nbr > 0) {
      url += "nbr=" + nbr + "&";
    }
    if (year && year.length > 0) {
      year.forEach((y) => {
        url +=
          "filters[date][$gte]=" +
          year +
          "-01-01&filters[date][$lte]=" +
          year +
          "-12-31";
      });
    }

    return this.http.get<DocumentAndAuthor>(url);
  }

  getDocumentTags(
    documentType?: DocumentType,
    archived?: boolean
  ): Observable<String> {
    let url = this.BASE_URL + "documents/tags?";

    if (documentType && documentType != null) {
      url += "type=" + documentType + "&";
    }
    if (archived != undefined) {
      url += "archived=" + archived.toString() + "&";
    }
    return this.http.get<String>(url);
  }

  getDocumentAuthors(
    documentType?: DocumentType,
    slug?: String,
    archived?: boolean
  ): Observable<Member> {
    let url = this.BASE_URL + "documents/authors?";

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

  getDocumentYears(
    documentType?: DocumentType,
    archived?: boolean
  ): Observable<String> {
    let url = this.BASE_URL + "documents/years?";

    if (documentType && documentType != null) {
      url += "type=" + documentType + "&";
    }
    if (archived != undefined) {
      url += "archived=" + archived.toString() + "&";
    }
    return this.http.get<String>(url);
  }

  getMembre(status?: String, username?: String, archive?: boolean) {
    let url: string = this.BASE_URL + "membres?populate[image][fields][0]=url&";

    if (status && status != "") {
      url += "status=" + status + "&";
    }

    if (username && username != "") {
      url += "filters[username][$eq]=" + username + "&";
    }

    if (archive != undefined) {
      url += "filters[archive][$eq]=" + archive.toString() + "&";
    }
    return this.http.get<Member>(url);
  }
}
