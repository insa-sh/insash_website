import { Component, Input } from "@angular/core";
import { ApiService } from "src/app/interaction-backend/api.service";
import { Projet } from "src/app/models/projet";

@Component({
  selector: "app-projet-detail-header",
  templateUrl: "./projet-detail-header.component.html",
  styleUrls: ["./projet-detail-header.component.css"],
})
export class ProjetDetailHeaderComponent {
  @Input() public projet!: Projet;
  public BASE_URL = ApiService.getBaseUrl();
}
