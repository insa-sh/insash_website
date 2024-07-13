import { Component, Input } from "@angular/core";
import { DocumentService, SortingBy } from "src/app/interaction-backend/document.service";
import { DocumentAndAuthor } from "src/app/models/document-and-author";
import { Member } from "src/app/interaction-backend/member";
import { Document, DocumentType } from "src/app/models/document";

@Component({
  selector: "app-top-project",
  templateUrl: "./top-project.component.html",
  styleUrls: ["./top-project.component.css"],
})
export class TopProjectComponent {

  public topProjects: DocumentAndAuthor[] = [];
  public authors: Member[] = [];
  @Input() numberOfProjects: number = 3; 

  constructor(private documentService: DocumentService) {

  }

  fetchTopProjects() {

    this.documentService.getDocument(DocumentType.project, [], "", "", "", [], SortingBy.dateAsc, [], this.numberOfProjects)
      .subscribe(
        (data: any) => {

          this.topProjects = data.map((project: any) => {

            return new DocumentAndAuthor(
              new Document(
                project.title,
                project.type,

                project.tags,
                project.content_address,

                project.date,

                project.description,
                this.documentService.getDocumentImageURL(project.type, project.image_address),
                project.slug,
                project.is_image_icon,

              ),
              []
            );
          });
          this.topProjects.forEach(projectAndAuthor => {
            this.documentService.getDocumentAuthor(projectAndAuthor.document.slug)
              .subscribe(
                (data: any) => {
                  projectAndAuthor.authors = data.map((membre: any) => {

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

          });

        })

  }



  ngOnInit() {
    this.fetchTopProjects();
  }


}
