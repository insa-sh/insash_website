import { Component } from '@angular/core';

declare function toggleNavigationMenu(): void;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // variables à exporter vers la page utilisables en ecrivant {{ nomVariable }} sur la page
  links = [
    { link: 'home', title: 'Accueil' },
    { link: 'about', title: 'A propos' },
    { link: 'events', title: 'Événements' },
    { link: 'team', title: 'Équipe' },
    { link: 'contact', title: 'Contact' }
  ];
}
