import {
  Component,
  Input,
  SimpleChanges,
  ChangeDetectorRef,
} from "@angular/core";

import { Document } from "src/app/models/document";

@Component({
  selector: "app-liste-document",
  templateUrl: "./liste-document.component.html",
  styleUrls: ["./liste-document.component.css"],
})
export class ListeDocumentComponent {
  @Input() documents!: Document[];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes["documents"]) {
      this.cdr.detectChanges();
    }
  }
}
