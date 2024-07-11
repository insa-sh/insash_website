import { Component } from "@angular/core";
import { Project } from "src/app/models/project";
import { DocumentService, SortingByDate } from "src/app/interaction-backend/document.service";
import { DocumentAndAuthor } from "src/app/interaction-backend/document-and-author";
import { Member } from "src/app/interaction-backend/member";
import { Document } from "src/app/interaction-backend/document";

@Component({
  selector: "app-top-project",
  templateUrl: "./top-project.component.html",
  styleUrls: ["./top-project.component.css"],
})
export class TopProjectComponent {

  public topProjects: DocumentAndAuthor[] = [];
  public authors: Member[] = [];

  constructor(private documentService: DocumentService) {

  }

  fetchTopProjects() {



    this.documentService.getProject([], "", "", "", SortingByDate.Asc, 3)
      .subscribe(
        (data: any) => {
          
          this.topProjects = data.map((project: any) => {
            //
            // console.log(this.authors);
            return new DocumentAndAuthor(
              new Document(
                project.title,
                project.type,

                project.tags,
                project.content_address,

                project.date,

                project.description,
                this.documentService.getProjectImageURL(project.image_address),
                project.slug,
                project.is_image_icon,



              ),
              []
            );
          });
          console.log(this.topProjects);
          this.topProjects.forEach(projectAndAuthor => {
            console.log(projectAndAuthor);
             this.documentService.getProjectAuthor(projectAndAuthor.document.slug)
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
                  membre.surname
                )
              }
  
              
  
              ); 
              
            }
          );
  
  
          });
          
        })

        console.log("je suis deuxième");
        



        
  }



  ngOnInit() {
    this.fetchTopProjects();
  }


}
