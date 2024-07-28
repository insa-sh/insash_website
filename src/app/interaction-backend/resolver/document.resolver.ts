import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { DocumentService, SortingBy } from "../document.service";
import { catchError, Observable, of } from "rxjs";
import { Document, DocumentType } from "../../models/document";
import { DocumentAndAuthor } from "src/app/models/document-and-author";
import { Member } from "src/app/models/member";


const createDocumentResolver = (documentType: DocumentType, nbr? : number): ResolveFn<DocumentAndAuthor> => {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {


        let slug = "";
        let username = [];
        if (nbr == null) {
            nbr = 0;
        } 

        if (route.paramMap.get('slug') != null) {
            slug = route.paramMap.get('slug')!;
        }

        
    if (route.paramMap.get('username') != null) {
        username.push(route.paramMap.get('username')!);
    }

        return inject(DocumentService).getDocument(documentType = documentType, [], "", "", slug, [], SortingBy.dateAsc, username, nbr = nbr, false).pipe(
            catchError((error) => {
              console.error('Error loading documents');
              return of(null); 
            })
          );
    };
};

export const ProjectResolver = createDocumentResolver(DocumentType.project);
export const CheatsheetResolver = createDocumentResolver(DocumentType.cheatsheet);
export const TipsResolver = createDocumentResolver(DocumentType.tips);
export const NewsResolver = createDocumentResolver(DocumentType.news);

export const TopProjectResolver = createDocumentResolver(DocumentType.project, 3);
export const TopCheatsheetResolver = createDocumentResolver(DocumentType.cheatsheet, 3);
export const TopTipsResolver = createDocumentResolver(DocumentType.tips, 3);
export const TopNewsResolver = createDocumentResolver(DocumentType.news, 3);

const createDocumentTagsResolver = (documentType: DocumentType): ResolveFn<String> => {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {

        return inject(DocumentService).getDocumentTags(documentType = documentType, false).pipe(
            catchError((error) => {
              console.error('Error loading document tags');
              return of(null); 
            })
          );
    };
};

export const ProjectTagsResolver = createDocumentTagsResolver(DocumentType.project);
export const CheatsheetTagsResolver = createDocumentTagsResolver(DocumentType.cheatsheet);
export const TipsTagsResolver = createDocumentTagsResolver(DocumentType.tips);
export const NewsTagsResolver = createDocumentTagsResolver(DocumentType.news);

const createDocumentAuthorResolver = (documentType: DocumentType): ResolveFn<Member> => {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {

        return inject(DocumentService).getDocumentAuthors(documentType = documentType, "", false).pipe(
            catchError((error) => {
              console.error('Error loading document authors');
              return of(null); 
            })
          );
    };
};

export const ProjectAuthorResolver = createDocumentAuthorResolver(DocumentType.project);
export const CheatsheetAuthorResolver = createDocumentAuthorResolver(DocumentType.cheatsheet);
export const TipsAuthorResolver = createDocumentAuthorResolver(DocumentType.tips);
export const NewsAuthorResolver = createDocumentAuthorResolver(DocumentType.news);

const createDocumentYearResolver = (documentType: DocumentType): ResolveFn<String> => {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {

        return inject(DocumentService).getDocumentYears(documentType = documentType, false).pipe(
            catchError((error) => {
              console.error('Error loading document years');
              return of(null); 
            })
          );
    };
};

export const ProjectYearResolver = createDocumentYearResolver(DocumentType.project);
export const CheatsheetYearResolver = createDocumentYearResolver(DocumentType.cheatsheet);
export const TipsYearResolver = createDocumentYearResolver(DocumentType.tips);
export const NewsYearResolver = createDocumentYearResolver(DocumentType.news);

export const MemberResolver : ResolveFn<Member> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {

    let username = "";
    if (route.paramMap.get('username') != null) {
        username = route.paramMap.get('username')!;
    }

        return inject(DocumentService).getMembers("", username, undefined).pipe(
            catchError((error) => {
              console.error('Error loading member');
              return of(null); 
            })
          );
    };
