import { Component, Input } from "@angular/core";
import { Member } from "src/app/models/member";

@Component({
  selector: "app-membres-du-bureau",
  templateUrl: "./membres-du-bureau.component.html",
  styleUrls: ["./membres-du-bureau.component.css"],
})
export class MembresDuBureauComponent {
  // tableaux d'éléments de type Member (dit 'interface')
  @Input() membres!: Member[]; // ! -> la variable membres est obligatoire et ne sera jamais null ou undefined

  president: Member | undefined;
  secretaire: Member | undefined;
  tresorier: Member | undefined;
  responsableCommunication: Member | undefined;

  ngOnInit() {
    this.president = this.membres.find(
      (m) => m.role.String.toLowerCase() === "président"
    );
    this.secretaire = this.membres.find(
      (m) => m.role.String.toLowerCase() === "secrétaire"
    );
    this.tresorier = this.membres.find(
      (m) => m.role.String.toLowerCase() === "trésorier"
    );
    this.responsableCommunication = this.membres.find(
      (m) => m.role.String.toLowerCase() === "responsable communication"
    );
  }
}
