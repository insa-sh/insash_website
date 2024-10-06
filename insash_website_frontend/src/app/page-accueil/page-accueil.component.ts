import { Component, Input , Renderer2} from "@angular/core";
import { DocumentService } from "../interaction-backend/document.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DocumentAndAuthor } from "../models/document-and-author";

const NUMBER_OF_TOP_DOCUMENTS = 3;

@Component({
  selector: "app-page-accueil",
  templateUrl: "./page-accueil.component.html",
  styleUrls: ["./page-accueil.component.css"],
})
export class PageAccueilComponent {
  public title = "Site Web du Club Info";

  @Input() public topDocumentsAndAuthors: DocumentAndAuthor[] = [];

  private keysPressed: string[] = [];
  private keyDownListener: (() => void) | undefined;

  constructor(private documentService: DocumentService, private route: ActivatedRoute, private renderer: Renderer2, private router: Router) {

  }
  
  fetchTopDocuments() {
    this.route.data.subscribe(
        (data) => {
          if (data['topDocumentsAndAuthors'] != null) {

              this.topDocumentsAndAuthors = data['topDocumentsAndAuthors'];
              

          }
        })
  }

  private handleKeyPress(event: KeyboardEvent): void {

    this.keysPressed.push(event.key);

    // Implémenter la logique pour une autre séquence
    if (this.codeSecret(['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']) || this.codeSecret(['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'B', 'A'])) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');

    }

    if (this.keysPressed.length > 9) { 
      this.keysPressed.shift();
    }
  }

  private codeSecret(sequence: string[]): boolean {
    const length = sequence.length;
    if (this.keysPressed.length < length) {
      return false;
    }
    for (let index = 0; index < sequence.length; index++) {
      if (this.keysPressed[index] !== sequence[index]) {
        return false;
      }
      
    }
    return true;
  }

  ngOnInit() {
    this.fetchTopDocuments();
    this.keyDownListener = this.renderer.listen('document', 'keydown', (event: KeyboardEvent) => {
      this.handleKeyPress(event);
    });
  }

  ngOnDestroy() {
    if (this.keyDownListener) {
      this.keyDownListener();
    }
  }
}
