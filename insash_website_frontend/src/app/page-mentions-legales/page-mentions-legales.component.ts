import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page-mentions-legales',
  templateUrl: './page-mentions-legales.component.html',
  styleUrls: ['./page-mentions-legales.component.css']
})
export class PageMentionsLegalesComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });
    setTimeout(() => {
      this.meta.updateTag({ name: 'description', content: 'Mentions légales - ./insa.sh' });
      this.meta.updateTag({ name: 'keywords', content: 'mentions légales, INSA, Club Info, informatique, projets, articles, étudiants, Hauts-de-France' });
      this.meta.updateTag({ property: 'og:title', content: 'Mentions légales du Club Info de l\'INSA HdF' });
      this.meta.updateTag({ property: 'og:description', content: 'Mentions légales du Club Info' });
      this.meta.updateTag({ property: 'og:type', content: 'website' });
    }, 0);
  }
}
