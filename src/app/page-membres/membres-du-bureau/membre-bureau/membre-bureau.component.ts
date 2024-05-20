import { Component, Input } from '@angular/core';
import { Member } from "src/app/models/member";


@Component({
  selector: 'app-membre-bureau',
  templateUrl: './membre-bureau.component.html',
  styleUrls: ['./membre-bureau.component.css']
})
export class MembreBureauComponent {
  @Input() membre!: Member; // ! -> la variable membre est obligatoire et ne sera jamais null ou undefined
}
