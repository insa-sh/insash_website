import { Component, Input } from '@angular/core';
import { DocumentService, SortingBy } from '../interaction-backend/document.service';
import { DocumentAndAuthor } from '../models/document-and-author';
import { Document, DocumentType } from '../models/document';
import { Member } from '../interaction-backend/member';

const MIN_TOP_DECUMENTS=2 ;

@Component({
  selector: 'app-page-projets',
  templateUrl: './page-project.component.html',
  styleUrls: ['./page-project.component.css']
})

export class PageProjectComponent {

  public documentsAndAuthors: DocumentAndAuthor[] = [];
  public authors: Member[] = [];
  public tags: string[] = [];
  public dates: string[] = [];

  public selectedSortBy: SortingBy = SortingBy.dateAsc;
  public selectedTags: string[] = [];
  public selectedAuthors: string[] = [];
  public search: string = "";
  public selectedDates: string[] = [];

  @Input() typeOfDocuments: DocumentType = DocumentType.project; 
  @Input() title: string = "Nos projets";
  @Input() subtitle1: string = "Projets en vedette";
  @Input() subtitle2: string = "Tous les projets";

  constructor(private documentService: DocumentService, ) {

  }

  fetchDocuments() {
    
    this.documentService.getDocument(this.typeOfDocuments, this.selectedTags, this.search, "", "", this.selectedDates, this.selectedSortBy, this.selectedAuthors)
      .subscribe(
        (data: any) => {
          
          this.documentsAndAuthors = data.map((document: any) => {

            return new DocumentAndAuthor(
              new Document(
                document.title,
                document.type,

                document.tags,
                document.content_address,

                document.date,

                document.description,

                this.documentService.getDocumentImageURL(document.type, document.image_address),
                
                document.slug,
                document.is_image_icon,

              ),
              []
            );
          } );

          this.documentsAndAuthors.forEach(documentAndAuthor => {
            this.documentService.getDocumentAuthor(documentAndAuthor.document.slug)
              .subscribe(
                (data: any) => {
                  
                  documentAndAuthor.authors = data.map((membre: any) => {
                    
                    return new Member(
                      membre.firstname,
                      membre.lastname,
                      membre.year,
                      membre.role,
                      membre.website,
                      membre.mail,
                      membre.image_address,
                      membre.linkedin,
                      membre.github,
                      membre.citation,
                      membre.surname,
                      membre.status
                    )
                  }

                  );

                }
              );

          }
        
        
          );

        })

  }

  fetchTags() {
    this.documentService.getDocumentTags(this.typeOfDocuments)
      .subscribe(
        (data: any) => {
          
        }
      );
  
  }



  ngOnInit() {
    this.fetchDocuments();
    this.fetchTags();
  }

  isThereEnoughTopDocuments() {
    return this.documentsAndAuthors.length >= MIN_TOP_DECUMENTS;
  }

}
