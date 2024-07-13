import { Component, Input } from '@angular/core';
import { DocumentService, SortingByDate } from '../interaction-backend/document.service';
import { DocumentAndAuthor } from '../models/document-and-author';
import { Document } from '../models/document';
import { Member } from '../interaction-backend/member';

const MIN_TOP_DECUMENTS=2 ;

enum TypeOfDocuments {
  project = "project",
  article = "article"
}

@Component({
  selector: 'app-page-projets',
  templateUrl: './page-project.component.html',
  styleUrls: ['./page-project.component.css']
})

export class PageProjectComponent {

  public documents: DocumentAndAuthor[] = [];
  public authors: Member[] = [];

  @Input() typeOfDocuments: string = TypeOfDocuments.project; 
  @Input() tagOfDocument?: string = undefined; 
  @Input() title: string = "Nos projets";
  @Input() subtitle1: string = "Projets en vedette";
  @Input() subtitle2: string = "Tous les projets";

  constructor(private documentService: DocumentService, ) {

  }

  fetchDocuments() {
    let handler;
    if (this.typeOfDocuments == TypeOfDocuments.project) {
      if (this.tagOfDocument == undefined) {
        handler = this.documentService.getProject([], "", "", "", SortingByDate.Asc);
      } else {
        handler = this.documentService.getProject([this.tagOfDocument!], "", "", "", SortingByDate.Asc);
      }
    } else {
      if (this.tagOfDocument == undefined) {
        handler = this.documentService.getArticle([], "", "", "", SortingByDate.Asc);
      } else {
        handler = this.documentService.getArticle([this.tagOfDocument!], "", "", "", SortingByDate.Asc);
      }
    }

    handler
      .subscribe(
        (data: any) => {

          this.documents = data.map((document: any) => {

            return new DocumentAndAuthor(
              new Document(
                document.title,
                document.type,

                document.tags,
                document.content_address,

                document.date,

                document.description,
                this.typeOfDocuments == TypeOfDocuments.project ? this.documentService.getProjectImageURL(document.image_address) : this.documentService.getArticleImageURL(document.image_address),
                document.slug,
                document.is_image_icon,

              ),
              []
            );
          });
          this.documents.forEach(documentAndAuthor => {
            this.documentService.getProjectAuthor(documentAndAuthor.document.slug)
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
                      membre.surname
                    )
                  }

                  );

                }
              );

          });

        })

  }



  ngOnInit() {
    this.fetchDocuments();
  }

  isThereEnoughTopDocuments() {
    return this.documents.length >= MIN_TOP_DECUMENTS;
  }

}
