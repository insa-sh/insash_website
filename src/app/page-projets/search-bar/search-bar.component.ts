import { Component, Input } from '@angular/core';
import { DocumentService } from 'src/app/interaction-backend/document.service';
import { Member } from 'src/app/interaction-backend/member';
import { DocumentType } from 'src/app/models/document';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public authors: Member[] = [];
  public tags: string[] = [];
  public dates: string[] = ["2021-2022", "2022-2023", "2023-2024"];
  public tri: string[] = ["A-Z", "Z-A", "Plus récent", "Plus ancien"];

  @Input() typeOfDocuments: DocumentType = DocumentType.project;

  constructor(private documentService: DocumentService) {

  }

  fetchTags() {
    this.documentService.getDocumentTags(this.typeOfDocuments)
      .subscribe(
        (data: any) => {
          for (let tag of data) {
            this.tags.push(tag);
          }
        }
      );
  
  }

  fetchAuthors() {
    this.documentService.getDocumentAuthor("")
      .subscribe(
        (data: any) => {
          this.authors = data.map((author: any) => {

            return new Member(
              author.firstname,
              author.lastname,
              author.year,
              author.role,
              author.website,
              author.mail, 
              author.image_address,
              author.linkedin,
              author.github,
              author.citation,
              author.surname,
              author.status

            );
        }
      );
  
  });}

  ngOnInit() {
    this.fetchAuthors();
  }

}
