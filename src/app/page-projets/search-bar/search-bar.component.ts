import { Component, Input } from '@angular/core';
import { DocumentService } from 'src/app/interaction-backend/document.service';
import { DocumentType } from 'src/app/models/document';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public authors: string[] = ['Louison', 'Maxime', 'Maël', 'Nathan', 'Sylvain', 'Rémi', 'Axel'];
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

  ngOnInit() {
    this.fetchTags();
  }

}
