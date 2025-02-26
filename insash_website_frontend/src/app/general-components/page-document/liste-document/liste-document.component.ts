import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from "@angular/core";
import { Document2 } from "src/app/models/document2";

@Component({
  selector: "app-liste-document",
  templateUrl: "./liste-document.component.html",
  styleUrls: ["./liste-document.component.css"],
})
export class ListeDocumentComponent {
  @Input() documents!: Document2[];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["documents"]) {
      this.cdr.detectChanges();
    }
  }
}
