import { Component, inject } from '@angular/core';
import { DocumentAndAuthor } from '../models/document-and-author';
import { DocumentService } from '../interaction-backend/document.service';
import { DocumentType } from '../models/document';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-page-projets-detail',
  templateUrl: './page-projets-detail.component.html',
  styleUrls: ['./page-projets-detail.component.css']
})
export class PageProjetsDetailComponent {
  public project!: DocumentAndAuthor;
  public projectSlug: string = "";

  constructor(private documentService: DocumentService) {

  }

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.projectSlug = params['slug'];
    });
    this.fetchProject();
    
  }

  

  fetchProject() {
    
    this.documentService.getDocument(DocumentType.project, [], "", "", this.projectSlug, [], undefined, [], undefined).subscribe(
        (data: any) => {
          if (data) {
            this.project = data[0];
            this.project.document.image_address = this.documentService.getDocumentImageURL(this.project.document.type, this.project.document.image_address);
            this.project.document.content_address = this.documentService.getMarkdownURL(this.project.document.type, this.project.document.slug ,this.project.document.content_address);
          } else {
            this.router.navigate(['/404']);
          }
          
        })

        
  }
}
