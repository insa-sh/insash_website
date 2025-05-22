import { Component, OnInit } from "@angular/core";
import { FooterComponent } from "./general-components/footer/footer.component";
import { HeaderComponent } from "./general-components/header/header.component";
import { CommonModule } from "@angular/common";
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd } from "@angular/router";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  // variables à exporter vers la page utilisables en ecrivant {{ nomVariable }} sur la page
  title = "Site Web du Club Info";


  constructor(private router: Router, private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
        // SEO: Set default meta tags on navigation
        this.titleService.setTitle('Site Web du Club Info');
        this.meta.updateTag({ name: 'description', content: 'Le Club Info de l’INSA Hauts-de-France : actualités, projets, membres, et plus.' });
        this.meta.updateTag({ name: 'keywords', content: 'INSA, Club Info, informatique, projets, articles, étudiants, Hauts-de-France' });
        this.meta.updateTag({ property: 'og:title', content: 'Site Web du Club Info' });
        this.meta.updateTag({ property: 'og:description', content: 'Découvre les projets, articles et membres du Club Info INSA Hauts-de-France.' });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        // app icon
        this.meta.updateTag({ property: 'og:image', content: 'public/images/logos/app-icon.png' });
        // apple touch icon
        this.meta.updateTag({ name: 'apple-mobile-web-app-title', content: './insa.sh' });


        
      }
    });
  }

  
}
