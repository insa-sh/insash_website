import { Component, Input } from "@angular/core";
import { Member } from "src/app/models/member";
import { Router } from "@angular/router";
import { ApiService } from "src/app/interaction-backend/api.service";

@Component({
  selector: "app-membre-bureau",
  templateUrl: "./membre-bureau.component.html",
  styleUrls: ["./membre-bureau.component.css"],
})
export class MembreBureauComponent {
  @Input() membre!: Member; // ! -> la variable membre est obligatoire et ne sera jamais null ou undefined

  constructor(private router: Router) {}

  public BASE_URL = ApiService.getBaseUrl();

  navigateToMembre(username: string) {
    this.router.navigate([`/les-membres/${username}`]);
  }
  // ouvrir un lien externe
  openLink(link: string) {
    window.open(link, "_blank");
  }
  imageError(event: any) {
    this.membre.image!.url = "";
  }
}
