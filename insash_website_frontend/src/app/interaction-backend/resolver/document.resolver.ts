import { inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { DocumentService, SortingBy } from "../document.service";
import { catchError, Observable, of } from "rxjs";
import { Member } from "src/app/models/member";
import { Projet } from "src/app/models/projet";
import { Article } from "src/app/models/article";
import { Categorie } from "src/app/models/categorie";
import { Tag } from "src/app/models/tag";

const emptyApiResponse = { data: [] };

function fallbackOnApiError<T>() {
  return (source: Observable<T>): Observable<T> =>
    source.pipe(catchError(() => of(emptyApiResponse as T)));
}

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
    let categoriesAccepted: Categorie[] = [];
    userService.getArticleCategorie().pipe(fallbackOnApiError<any>()).subscribe((data: any) => {
      if (data && data["data"].length > 0) {
        categoriesAccepted = data["data"];
        if (!categoriesAccepted.some((c) => c.slug == categorie)) {
          router.navigate(["/404"]);
        }
      }
    });
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
  ).pipe(fallbackOnApiError<Article>());
};

export const ProjetResolver: ResolveFn<Projet> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Projet> => {
  const userService = inject(DocumentService);

  let slug = "";
  let username: string[] = [];

  if (route.paramMap.get("slug") != null) {
    slug = route.paramMap.get("slug")!;
  }

  if (route.paramMap.get("username") != null) {
    username = [route.paramMap.get("username")!];
  }

  return userService.getProjet(
    undefined,
    undefined,
    undefined,
    slug,
    undefined,
    SortingBy.dateDesc,
    username,
    undefined
  ).pipe(fallbackOnApiError<Projet>());
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
    let categoriesAccepted: Categorie[] = [];
    userService.getArticleCategorie().pipe(fallbackOnApiError<any>()).subscribe((data: any) => {
      if (data && data["data"].length > 0) {
        categoriesAccepted = data["data"];
        if (!categoriesAccepted.some((c) => c.slug === categorie)) {
          router.navigate(["/404"]);
        }
      }
    });
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
  ).pipe(fallbackOnApiError<Article>());
};

export const TopProjetResolver: ResolveFn<Projet> = (
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
  ).pipe(fallbackOnApiError<Projet>());
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

  return userService.getArticleTags(categorie).pipe(fallbackOnApiError<Tag>());
};

export const ProjetTagsResolver: ResolveFn<Tag> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Tag> => {
  const userService = inject(DocumentService);

  return userService.getProjetTags().pipe(fallbackOnApiError<Tag>());
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

  return userService.getArticleAuthors(categorie, slug).pipe(fallbackOnApiError<Member>());
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

  return userService.getProjetAuthors(slug).pipe(fallbackOnApiError<Member>());
};

export const ProjetYearResolver: ResolveFn<Projet> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Projet> => {
  const userService = inject(DocumentService);
  return userService.getProjetYears().pipe(fallbackOnApiError<Projet>());
};

export const ArticleCategorieResolver: ResolveFn<Categorie> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Categorie> => {
  const userService = inject(DocumentService);
  return userService.getArticleCategorie().pipe(fallbackOnApiError<Categorie>());
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
  return userService.getCategorie(categorieSlug).pipe(fallbackOnApiError<Categorie>());
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
  return userService.getArticleYears(categorie).pipe(fallbackOnApiError<Article>());
};

export const MemberResolver: ResolveFn<Member> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Member> => {
  let username = "";
  if (route.paramMap.get("username") != null) {
    username = route.paramMap.get("username")!;
  }

  return inject(DocumentService).getMembre(username).pipe(fallbackOnApiError<Member>());
};
