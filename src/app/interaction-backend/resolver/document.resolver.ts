import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { DocumentService, SortingBy } from "../document.service";
import { Observable } from "rxjs";
import { Document, DocumentType } from "../../models/document";
import { DocumentAndAuthor } from "src/app/models/document-and-author";
import { Member } from "../member";


const createDocumentResolver = (documentType?: DocumentType, nbr? : number): ResolveFn<DocumentAndAuthor> => {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DocumentAndAuthor> => {

        let tags = route.queryParamMap.getAll('tag');
        let search = route.queryParamMap.get('search');
        if (!search) search = "";
        let uuid = route.queryParamMap.get('uuid');
        if (!uuid) uuid = "";
        let slug = route.queryParamMap.get('slug');
        if (!slug) slug = "";
        let years = route.queryParamMap.getAll('year');
        let authors = route.queryParamMap.getAll('author');
        let sort = route.queryParamMap.get('sort') as SortingBy;
        if (nbr == null) {
            let queryNbr = route.queryParamMap.get('nbr');
            if (queryNbr) {
                nbr = +queryNbr;
            }
            
        } 
        
        if (documentType == null) {
            documentType = route.queryParamMap.get('type') as DocumentType;
        }

        return inject(DocumentService).getDocument(documentType = documentType, tags = tags, search = search, uuid = uuid, slug = slug, years = years, sort = sort, authors = authors, nbr = nbr);
    };
};

export const ProjectResolver = createDocumentResolver(DocumentType.project);
export const CheatsheetResolver = createDocumentResolver(DocumentType.cheatsheet);
export const TipsResolver = createDocumentResolver(DocumentType.tips);
export const NewsResolver = createDocumentResolver(DocumentType.news);

export const TopProjectResolver = createDocumentResolver(DocumentType.project, 3);

const createDocumentTagsResolver = (documentType: DocumentType): ResolveFn<String> => {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<String> => {

        return inject(DocumentService).getDocumentTags(documentType = documentType);
    };
};

export const ProjectTagsResolver = createDocumentTagsResolver(DocumentType.project);
export const CheatsheetTagsResolver = createDocumentTagsResolver(DocumentType.cheatsheet);
export const TipsTagsResolver = createDocumentTagsResolver(DocumentType.tips);
export const NewsTagsResolver = createDocumentTagsResolver(DocumentType.news);

const createDocumentAuthorResolver = (documentType: DocumentType): ResolveFn<Member> => {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Member> => {

        return inject(DocumentService).getDocumentAuthors(documentType = documentType);
    };
};

export const ProjectAuthorResolver = createDocumentAuthorResolver(DocumentType.project);
export const CheatsheetAuthorResolver = createDocumentAuthorResolver(DocumentType.cheatsheet);
export const TipsAuthorResolver = createDocumentAuthorResolver(DocumentType.tips);
export const NewsAuthorResolver = createDocumentAuthorResolver(DocumentType.news);

const createDocumentYearResolver = (documentType: DocumentType): ResolveFn<String> => {
    return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<String> => {

        return inject(DocumentService).getDocumentYears(documentType = documentType);
    };
};

export const ProjectYearResolver = createDocumentYearResolver(DocumentType.project);
export const CheatsheetYearResolver = createDocumentYearResolver(DocumentType.cheatsheet);
export const TipsYearResolver = createDocumentYearResolver(DocumentType.tips);
export const NewsYearResolver = createDocumentYearResolver(DocumentType.news);