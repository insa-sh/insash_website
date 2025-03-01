import { Component, Input } from "@angular/core";
import { Member } from "src/app/models/member";

@Component({
  selector: "app-membres-du-bureau",
  templateUrl: "./membres-du-bureau.component.html",
  styleUrls: ["./membres-du-bureau.component.css"],
})
export class MembresDuBureauComponent {
  // tableaux d'éléments de type Member (dit 'interface')
  @Input() membre!: Member[]; // ! -> la variable membres est obligatoire et ne sera jamais null ou undefined

  president: Member | undefined;
  secretaire: Member | undefined;
  tresorier: Member | undefined;
  responsableCommunication: Member | undefined;

  ngOnInit() {
    this.president = this.membre.find(
      (m) => m.role.toLowerCase() === "président"
    );
    this.secretaire = this.membre.find(
      (m) => m.role.toLowerCase() === "secrétaire"
    );
    this.tresorier = this.membre.find(
      (m) => m.role.toLowerCase() === "trésorier"
    );
    this.responsableCommunication = this.membre.find(
      (m) => m.role.toLowerCase() === "responsable communication"
    );
  }
}
