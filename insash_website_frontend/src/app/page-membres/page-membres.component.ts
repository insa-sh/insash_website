import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Member } from "src/app/models/member";

@Component({
  selector: "app-page-membres",
  templateUrl: "./page-membres.component.html",
  styleUrls: ["./page-membres.component.css"],
})
export class PageMembresComponent {
  public membre: Member[] = [];

  constructor(private route: ActivatedRoute) {}

  fetchMembers() {
    this.route.data.subscribe((data) => {
      if (data["members"] != null) {
        this.membre = data["members"]["data"];
      }
    });
  }

  ngOnInit() {
    this.fetchMembers();
  }
}
