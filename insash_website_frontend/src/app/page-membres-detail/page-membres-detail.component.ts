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
  public membre!: Member;
  public projet: Projet[] = [];

  constructor(private titleService: Title, private route: ActivatedRoute) {}

  private router = inject(Router);

  public BASE_URL = ApiService.getBaseUrl();

  ngOnInit() {
    this.fetchMember();
    this.fetchProjets();
  }

  fetchMember() {
    this.route.data.subscribe((data) => {
      if (data["member"] != null && data["member"]["data"].length > 0) {
        this.membre = data["member"]["data"][0];
        this.titleService.setTitle("./insa.sh - " + this.membre.username);
      } else {
        this.router.navigate(["/404"]);
      }
    });
  }

  fetchProjets() {
    this.route.data.subscribe((data) => {
      if (data["projet"] != null) {
        this.projet = data["projet"]["data"];
      }
    });
  }

  doesHeHaveInternet() {
    return (
      this.membre.github ||
      this.membre.linkedin ||
      this.membre.instagram ||
      this.membre.website
    );
  }

  imageError(event: any) {
    this.membre.image!.url = "";
  }
}
