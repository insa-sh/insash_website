import { Component, inject } from '@angular/core';
import { DocumentAndAuthor } from '../models/document-and-author';
import { DocumentService } from '../interaction-backend/document.service';
import { DocumentType } from '../models/document';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-document-detail',
  templateUrl: './page-document-detail.component.html',
  styleUrls: ['./page-document-detail.component.css']
})
export class PageDocumentsDetailComponent {
  public documentAndAuthor!: DocumentAndAuthor;

  constructor(private documentService: DocumentService, private titleService: Title, private route: ActivatedRoute) {
    
  } 

  private router = inject(Router);

  ngOnInit() {
    this.fetchDocument();
  }

  getNumberArchivedAuthors() {
    return this.documentAndAuthor.author.filter((a) => a.archived).length;
  }

  getActiveAuthors() { 
    return this.documentAndAuthor.author.filter((a) => !a.archived);
  }

  getDateString() {
    let date = new Date(this.documentAndAuthor.document.date);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  isProject() {
    return this.documentAndAuthor.document.type == DocumentType.project;
  }

  fetchDocument() {
    this.route.data.subscribe(
        (data) => {
          if (data['document'] != null) {

            this.documentAndAuthor = data['document'][0];

            this.titleService.setTitle("./insa.sh - " + this.documentAndAuthor.document.title);
            } else {
            this.router.navigate(['/404']);
          }
          
        })
  }
}
