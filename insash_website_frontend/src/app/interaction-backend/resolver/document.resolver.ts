import { Injectable, inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { DocumentService, SortingBy } from "../document.service";
import { Observable, firstValueFrom } from "rxjs";
import { Document, DocumentType } from "../../models/document";
import { DocumentAndAuthor } from "src/app/models/document-and-author";
import { Member } from "src/app/models/member";
import { Projet } from "src/app/models/projet";
import { Article } from "src/app/models/article";
import { Categorie } from "src/app/models/categorie";
import { Tag } from "src/app/models/tag";

export const ArticleResolver: ResolveFn<Article> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Article> => {
  const userService = inject(DocumentService);
  const router = inject(Router); // Injection du Router

  let slug = "";
  let categorie = "";

  if (route.paramMap.get("slug") != null) {
    slug = route.paramMap.get("slug")!;
  }

  if (route.paramMap.get("categorie") != null) {
    categorie = route.paramMap.get("categorie")!;
    // let categoriesAccepted: Categorie[] =
    //   userService.getArticleCategories()["data"];

    // if (!categoriesAccepted.some((c) => c.titre === categorie)) {
    //   router.navigate(["/404"]);
    // }
  }

  return userService.getArticle(
    categorie,
    undefined,
    undefined,
    undefined,
    slug,
    undefined,
    SortingBy.dateDesc,
    undefined,
    undefined
  );
};

export const ProjectResolver: ResolveFn<Projet> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Projet> => {
  const userService = inject(DocumentService);

  let slug = "";

  if (route.paramMap.get("slug") != null) {
    slug = route.paramMap.get("slug")!;
  }

  return userService.getProjet(
    undefined,
    undefined,
    undefined,
    slug,
    undefined,
    SortingBy.dateDesc,
    undefined,
    undefined
  );
};

export const TopArticleResolver: ResolveFn<Article> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Article> => {
  const userService = inject(DocumentService);
  const router = inject(Router); // Injection du Router

  let slug = "";
  let categorie = "";

  if (route.paramMap.get("slug") != null) {
    slug = route.paramMap.get("slug")!;
  }

  if (route.paramMap.get("categorie") != null) {
    categorie = route.paramMap.get("categorie")!;
    // let categoriesAccepted: Categorie[] =
    //   userService.getArticleCategorie()["data"];

    // if (!categoriesAccepted.some((c) => c.titre === categorie)) {
    //   router.navigate(["/404"]);
    // }
  }

  return userService.getArticle(
    categorie,
    undefined,
    undefined,
    undefined,
    slug,
    undefined,
    SortingBy.dateDesc,
    undefined,
    3
  );
};

export const TopProjectResolver: ResolveFn<Projet> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Projet> => {
  const userService = inject(DocumentService);
  return userService.getProjet(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    SortingBy.dateDesc,
    undefined,
    3
  );
};

export const ArticleTagsResolver: ResolveFn<Tag> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Tag> => {
  const userService = inject(DocumentService);

  let categorie = "";

  if (route.paramMap.get("categorie") != null) {
    categorie = route.paramMap.get("categorie")!;
  }

  return userService.getArticleTags(categorie);
};

export const ProjetTagsResolver: ResolveFn<Tag> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Tag> => {
  const userService = inject(DocumentService);

  return userService.getProjetTags();
};

export const ArticleAuthorResolver: ResolveFn<Member> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Member> => {
  const userService = inject(DocumentService);
  const router = inject(Router); // Injection du Router

  let slug = "";
  let categorie = "";

  if (route.paramMap.get("slug") != null) {
    slug = route.paramMap.get("slug")!;
  }

  if (route.paramMap.get("categorie") != null) {
    categorie = route.paramMap.get("categorie")!;
  }

  return userService.getArticleAuthors(categorie, slug);
};

export const ProjetAuthorResolver: ResolveFn<Member> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Member> => {
  const userService = inject(DocumentService);

  let slug = "";

  if (route.paramMap.get("slug") != null) {
    slug = route.paramMap.get("slug")!;
  }

  return userService.getProjetAuthors(slug);
};

export const ProjetYearResolver: ResolveFn<Projet> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Projet> => {
  const userService = inject(DocumentService);
  return userService.getProjetYears();
};

export const ArticleCategorieResolver: ResolveFn<Categorie> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Categorie> => {
  const userService = inject(DocumentService);
  return userService.getArticleCategorie();
};

export const CategorieResolver: ResolveFn<Categorie> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Categorie> => {
  const userService = inject(DocumentService);
  let categorieSlug = "";

  if (route.paramMap.get("categorie") != null) {
    categorieSlug = route.paramMap.get("categorie")!;
  }
  return userService.getCategorie(categorieSlug);
};

export const ArticleYearResolver: ResolveFn<Article> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Article> => {
  const userService = inject(DocumentService);

  let categorie = "";

  if (route.paramMap.get("categorie") != null) {
    categorie = route.paramMap.get("categorie")!;
  }
  return userService.getArticleYears(categorie);
};

export const MemberResolver: ResolveFn<Member> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Member> => {
  let username = "";
  if (route.paramMap.get("username") != null) {
    username = route.paramMap.get("username")!;
  }

  return inject(DocumentService).getMembre(username);
};
