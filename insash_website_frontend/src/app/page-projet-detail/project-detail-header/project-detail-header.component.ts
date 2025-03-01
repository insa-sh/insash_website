import { Component, Input } from "@angular/core";
import { ApiService } from "src/app/interaction-backend/api.service";
import { Projet } from "src/app/models/projet";

@Component({
  selector: "app-project-detail-header",
  templateUrl: "./project-detail-header.component.html",
  styleUrls: ["./project-detail-header.component.css"],
})
export class ProjectDetailHeaderComponent {
  @Input() public projet!: Projet;
  public BASE_URL = ApiService.getBaseUrl();
}
