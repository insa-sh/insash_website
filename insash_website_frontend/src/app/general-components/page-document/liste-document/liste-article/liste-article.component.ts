import {
  Component,
  Input,
  ChangeDetectorRef,
  SimpleChanges,
} from "@angular/core";
import { ListeDocumentTileComponent } from "src/app/general-components/liste-document-tile/liste-document-tile.component";
import { ListeDocumentComponent } from "../liste-document.component";
import { Article } from "src/app/models/article";

@Component({
  selector: "app-liste-article",
  templateUrl: "./liste-article.component.html",
  styleUrls: [
    "./liste-article.component.css",
    "../liste-document.component.css",
  ],
})
export class ListeArticleComponent extends ListeDocumentComponent {
  @Input() override document!: Article[];

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["document"]) {
      this.cdr.detectChanges();
    }
  }
}
