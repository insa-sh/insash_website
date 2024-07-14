import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { DocumentService, SortingBy } from "../document.service";
import { Observable } from "rxjs";
import { Document, DocumentType } from "../../models/document";
import { DocumentAndAuthor } from "src/app/models/document-and-author";
import { Member } from "../member";


const createDocumentResolver = (documentType: DocumentType): ResolveFn<DocumentAndAuthor> => {
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

        return inject(DocumentService).getDocument(documentType, tags, search, uuid, slug, years, sort, authors);
    };
};

const createDocumentLimitNumberResolver = (documentType: DocumentType): ResolveFn<DocumentAndAuthor> => {
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

        let nbr = route.data['resolveDataNumberOfTopDocuments']; 


        return inject(DocumentService).getDocument(documentType, tags, search, uuid, slug, years, sort, authors, nbr);
    };
};



export const ProjectResolver = createDocumentResolver(DocumentType.project);
export const CheatsheetResolver = createDocumentResolver(DocumentType.cheatsheet);
export const ProjectLimitNumberResolver = createDocumentLimitNumberResolver(DocumentType.project);