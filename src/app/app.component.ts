import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variables à exporter vers la page utilisables en ecrivant {{ nomVariable }} sur la page
  title = 'Site Web du Club Info'; 
}
