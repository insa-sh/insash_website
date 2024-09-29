import { Component } from '@angular/core';

// Importer la fonction toggleNavigationMenu() dans la page
declare function toggleNavigationMenu(): void;
declare function getDate(): String;
declare function getMonth(): String;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  day = getDate();
  month = getMonth();




  // Insérer le kit d'icones fontawesome (balise script)
  constructor() {
    this.loadScripts();

  }

  // Method to dynamically load JavaScript 
  loadScripts() {

    // This array contains all the files/CDNs 
    const dynamicScripts = [
      'public/scripts/navMenu.js'
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
