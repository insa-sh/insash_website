import { Component, Input } from '@angular/core';
import { Member } from "src/app/models/member";


@Component({
  selector: 'app-membres-du-bureau',
  templateUrl: './membres-du-bureau.component.html',
  styleUrls: ['./membres-du-bureau.component.css']
})
export class MembresDuBureauComponent {
  // tableau des rôles du bureau à afficher
  roles_bureau: string[] = ["Président", "Trésorier", "Secrétaire", "Respo Communication & Graphismes"];
  // tableaux d'éléments de type Member (dit 'interface')
  @Input() membres!: Member[]; // ! -> la variable membres est obligatoire et ne sera jamais null ou undefined
}
