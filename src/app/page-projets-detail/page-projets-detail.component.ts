import { Component, inject } from '@angular/core';
import { DocumentAndAuthor } from '../models/document-and-author';
import { DocumentService } from '../interaction-backend/document.service';
import { DocumentType } from '../models/document';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-projets-detail',
  templateUrl: './page-projets-detail.component.html',
  styleUrls: ['./page-projets-detail.component.css']
})
export class PageProjetsDetailComponent {
  public project!: DocumentAndAuthor;

  constructor(private documentService: DocumentService, private titleService: Title, private route: ActivatedRoute) {
    
  } 

  private router = inject(Router);

  ngOnInit() {
    this.fetchProject();
    this.titleService.setTitle("./insa.sh - " + this.project.document.title);
    console.log(this.project.document.content_address);
  }

  getNumberArchivedAuthors() {
    return this.project.author.filter((a) => a.archived).length;
  }

  getActiveAuthors() { 
    return this.project.author.filter((a) => !a.archived);
  }

  getDateString() {
    let date = new Date(this.project.document.date);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  fetchProject() {
    this.route.data.subscribe(
        (data) => {
          if (data['project'] != null) {

            this.project = data['project'][0];
            this.project.document.image_address = this.documentService.getDocumentImageURL(this.project.document.type, this.project.document.image_address);
            if (this.project.document.content_address.String != "") {
              this.project.document.content_address.String = this.documentService.getMarkdownURL(this.project.document.type, this.project.document.slug ,this.project.document.content_address.String);
          
            }
            } else {
            this.router.navigate(['/404']);
          }
          
        })
  }
}
