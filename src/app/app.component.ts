import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // variables à exporter vers la page utilisables en ecrivant {{ nomVariable }} sur la page
  title = 'Site Web du Club Info'; 
}
