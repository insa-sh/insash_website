import {
  Component,
  Input,
  SimpleChanges,
  ChangeDetectorRef,
} from "@angular/core";
import { Projet } from "src/app/models/projet";
import { ListeDocumentComponent } from "../liste-document.component";

@Component({
  selector: "app-liste-projet",
  templateUrl: "./liste-projet.component.html",
  styleUrls: [
    "./liste-projet.component.css",
    "../liste-document.component.css",
  ],
})
export class ListeProjetComponent extends ListeDocumentComponent {
  @Input() override document!: Projet[];
}
