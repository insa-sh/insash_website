import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Member } from "src/app/models/member";
import { DocumentService } from "../interaction-backend/document.service";

@Component({
  selector: "app-page-membres",
  templateUrl: "./page-membres.component.html",
  styleUrls: ["./page-membres.component.css"],
})
export class PageMembresComponent {
  public membres: Member[] = [];

  constructor(
    private route: ActivatedRoute,
    private documentService: DocumentService
  ) {}

  fetchMembers() {
    this.route.data.subscribe((data) => {
      if (data["members"] != null) {
        this.membres = data["members"];
      }
    });
  }

  ngOnInit() {
    this.fetchMembers();
  }
}
