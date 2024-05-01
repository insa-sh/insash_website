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
  constructor() { 
    this.loadScripts(); 
  } 
 
  // Method to dynamically load JavaScript 
  loadScripts() { 
 
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
       'https://kit.fontawesome.com/1416c49ef4.js'
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
      const node = document.createElement('script'); 
      node.src = dynamicScripts[i]; 
      node.type = 'text/javascript'; 
      node.async = false; 
      document.getElementsByTagName('head')[0].appendChild(node); 
    } 
  }
}
