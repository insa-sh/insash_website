import { Component, inject } from "@angular/core";
import { Member } from "../models/member";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../interaction-backend/api.service";
import { Projet } from "../models/projet";

@Component({
  selector: "app-page-membres-detail",
  templateUrl: "./page-membres-detail.component.html",
  styleUrls: ["./page-membres-detail.component.css"],
})
export class PageMembresDetailComponent {
  public member!: Member;
  public project: Projet[] = [];

  constructor(private titleService: Title, private route: ActivatedRoute) {}

  private router = inject(Router);

  public BASE_URL = ApiService.getBaseUrl();

  ngOnInit() {
    this.fetchMember();
    this.fetchProjects();
  }

  fetchMember() {
    this.route.data.subscribe((data) => {
      if (data["member"] != null) {
        this.member = data["member"]["data"][0];
        this.titleService.setTitle("./insa.sh - " + this.member.username);
      } else {
        this.router.navigate(["/404"]);
      }
    });
  }

  fetchProjects() {
    this.route.data.subscribe((data) => {
      if (data["project"] != null) {
        this.project = data["project"]["data"];
      }
    });
  }

  doesHeHaveInternet() {
    return (
      this.member.github ||
      this.member.linkedin ||
      this.member.instagram ||
      this.member.website
    );
  }

  imageError(event: any) {
    this.member.image!.url = "";
  }
}
