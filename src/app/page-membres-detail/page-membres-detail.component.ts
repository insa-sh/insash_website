import { Component, inject } from '@angular/core';
import { Member } from '../models/member';
import { DocumentService } from '../interaction-backend/document.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentAndAuthor } from '../models/document-and-author';

@Component({
  selector: 'app-page-membres-detail',
  templateUrl: './page-membres-detail.component.html',
  styleUrls: ['./page-membres-detail.component.css']
})
export class PageMembresDetailComponent {

  public member!: Member;
  public project: DocumentAndAuthor[] = [];

  constructor(private documentService: DocumentService, private titleService: Title, private route: ActivatedRoute) {
    
  } 

  private router = inject(Router);

  ngOnInit() {
    this.fetchMember();
    this.fetchProjects();
  }

  fetchMember() {
    this.route.data.subscribe(
        (data) => {
          if (data['member'] != null) {

            this.member = data['member'][0];
            this.titleService.setTitle("./insa.sh - " + this.member.username);
            if (this.member.image_address.String != "") {
              this.member.image_address.String = this.documentService.getMemberImageURL(this.member.image_address.String);
            }
            } else {
            this.router.navigate(['/404']);
          }
          
        })
  }

  fetchProjects() {
    this.route.data.subscribe(
        (data) => {
          if (data['project'] != null) {
            data['project'].forEach((documentsAndAuthor: DocumentAndAuthor) => {
              documentsAndAuthor.document.image_address = this.documentService.getDocumentImageURL(documentsAndAuthor.document.type, documentsAndAuthor.document.image_address);
              if (documentsAndAuthor.document.content_address.String != "") {
              documentsAndAuthor.document.content_address.String = this.documentService.getMarkdownURL(documentsAndAuthor.document.type, documentsAndAuthor.document.slug ,documentsAndAuthor.document.content_address.String);
              }
              this.project.push(documentsAndAuthor);
              
          });
          }
          
        })
  }

}
