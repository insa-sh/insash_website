import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Router } from '@angular/router';



@Component({
  selector: 'app-membre-bureau',
  templateUrl: './membre-bureau.component.html',
  styleUrls: ['./membre-bureau.component.css']
})
export class MembreBureauComponent {
  @Input() membre!: Member; // ! -> la variable membre est obligatoire et ne sera jamais null ou undefined

  

  constructor(private router: Router) { }
  
  navigateToMembre(username: string) {
    this.router.navigate([`/les-membres/${username}`]);
  }
  // ouvrir un lien externe
  openLink(link: string) {
    window.open(link, '_blank');
  }
  imageError (event: any) {
    console.log("Image load error, changing 'image_adress' to '' : " + event);
    this.membre.image_address.String = '';
  }

}
