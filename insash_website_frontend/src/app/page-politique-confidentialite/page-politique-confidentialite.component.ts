import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page-politique-confidentialite',
  templateUrl: './page-politique-confidentialite.component.html',
  styleUrls: ['./page-politique-confidentialite.component.css']
})
export class PagePolitiqueConfidentialiteComponent {

  constructor(private meta: Meta) {
      this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
    setTimeout(() => {
      this.meta.updateTag({ name: 'description', content: 'Politique de confidentialité - ./insa.sh' });
      this.meta.updateTag({ name: 'keywords', content: 'politique, condifentialité, INSA, Club Info, informatique, projets, articles, étudiants, Hauts-de-France' });
      this.meta.updateTag({ property: 'og:title', content: 'Politique de confidentialité du Club Info de l\'INSA HdF' });
      this.meta.updateTag({ property: 'og:description', content: 'Politique de confidentialité du Club Info' });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
    }, 0);
  }
}
