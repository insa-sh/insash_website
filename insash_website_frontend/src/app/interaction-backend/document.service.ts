import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Member } from "../models/member";
import { ApiService } from "./api.service";
import { Projet } from "../models/projet";
import { Tag } from "../models/tag";
import { Categorie } from "../models/categorie";
import { Article } from "../models/article";

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
    categorie?: String,
    tags?: string[],
    search?: string,
    documentId?: string,
    slug?: string,
    year?: string[],
    sort: SortingBy = SortingBy.dateAsc,
    username?: string[],
    nbr?: number
  ): Observable<Article> {
    let url: string =
      this.BASE_URL +
      "articles?populate[image][fields][0]=url&populate[auteur]=true&populate[tags][fields][0]=titre&populate[categorie]=true&";

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

    // TODO : voir si le filtrage marche
    if (tags && tags.length > 0) {
      tags.forEach((tag, i) => {
        url += "filters[$and][" + i + "][tags][titre][$eq]=" + tag + "&";
      });
    }

    if (categorie && categorie != null) {
      url += "filters[categorie][slug][$eq]=" + categorie + "&";
    }

    if (username && username.length > 0) {
      username.forEach((u, i) => {
        url += "filters[$and][" + i + "][auteur][username][$eq]=" + u + "&";
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
      url += "pagination[pageSize]=" + nbr + "&";
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

    return this.http.get<Article>(url);
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
  ): Observable<Projet> {
    let url: string =
      this.BASE_URL +
      "projets?populate[image][fields][0]=url&populate=auteur&populate[tags][fields][0]=titre&";

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
      tags.forEach((tag, i) => {
        url += "filters[$and][" + i + "][tags][titre][$eq]=" + tag + "&";
      });
    }

    if (username && username.length > 0) {
      username.forEach((u, i) => {
        url += "filters[$and][" + i + "][auteur][username][$eq]=" + u + "&";
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
      url += "pagination[pageSize]=" + nbr + "&";
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

    return this.http.get<Projet>(url);
  }

  getCategorie(categorieSlug?: String): Observable<Categorie> {
    let url: string =
      this.BASE_URL + "categories?filters[slug][$eq]=" + categorieSlug;
    return this.http.get<Categorie>(url);
  }

  getArticleCategorie(): Observable<Categorie> {
    let url: string = this.BASE_URL + "categories";
    return this.http.get<Categorie>(url);
  }

  getArticleTags(categorie?: String): Observable<Tag> {
    let url = this.BASE_URL + "tags?";

    if (categorie && categorie != null) {
      url += "filters[articles][categorie][slug][$eq]=" + categorie;
    }
    return this.http.get<Tag>(url);
  }

  getProjetTags(): Observable<Tag> {
    let url = this.BASE_URL + "tags?filters[projets][$notNull]=true";
    return this.http.get<Tag>(url);
  }

  getArticleAuthors(categorie?: String, slug?: String): Observable<Member> {
    let url = this.BASE_URL + "membres?";

    if (categorie && categorie != null) {
      url += "filters[articles][categorie][slug][$eq]=" + categorie;
    }

    if (slug && slug != "") {
      url += "filters[articles][slug][$eq]=" + slug + "&";
    }

    return this.http.get<Member>(url);
  }

  getProjetAuthors(slug?: String): Observable<Member> {
    let url = this.BASE_URL + "membres?filters[projets][$notNull]=true&";

    if (slug && slug != "") {
      url += "filters[articles][slug][$eq]=" + slug + "&";
    }

    return this.http.get<Member>(url);
  }

  getArticleYears(categorie?: String): Observable<Article> {
    let url = this.BASE_URL + "articles?fields=date&";

    if (categorie && categorie != null) {
      url += "filters[categorie][slug][$eq]=" + categorie + "&";
    }
    return this.http.get<Article>(url);
  }

  getProjetYears(): Observable<Projet> {
    let url = this.BASE_URL + "projets?fields=date&";

    return this.http.get<Projet>(url);
  }

  getMembre(username?: String) {
    let url: string = this.BASE_URL + "membres?populate[image][fields][0]=url&";

    if (username && username != "") {
      url += "filters[username][$eq]=" + username + "&";
    }

    return this.http.get<Member>(url);
  }
}
