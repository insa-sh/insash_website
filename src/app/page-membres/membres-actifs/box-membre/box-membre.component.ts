import { Component, Input } from '@angular/core';
import { Member } from "src/app/models/member";

@Component({
  selector: 'app-box-membre',
  templateUrl: './box-membre.component.html',
  styleUrls: ['./box-membre.component.css']
})
export class BoxMembreComponent {
  @Input() membre!: Member;

  imageError (event: any) {
    console.log("Image load error, changing 'image_adress' to '' : " + event);
    this.membre.image_address.String = '';
  }

}
