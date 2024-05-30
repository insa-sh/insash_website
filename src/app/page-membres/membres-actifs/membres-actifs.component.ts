import { Component, Input } from '@angular/core';
import { Member } from "src/app/models/member";

@Component({
  selector: 'app-membres-actifs',
  templateUrl: './membres-actifs.component.html',
  styleUrls: ['./membres-actifs.component.css']
})
export class MembresActifsComponent {
  @Input() roles_bureau!: string[]; // ! -> la variable roles_bureau est obligatoire et ne sera jamais null ou undefined
  // tableaux d'éléments de type Member (dit 'interface')
  @Input() membres!: Member[]; // ! -> la variable membres est obligatoire et ne sera jamais null ou undefined
}
