import {
  Component,
  Input,
  ChangeDetectorRef,
  SimpleChanges,
} from "@angular/core";
import { ListDocumentTileComponent } from "src/app/general-components/list-document-tile/list-document-tile.component";
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
      console.log(this.document);
      this.cdr.detectChanges();
    }
  }
}
