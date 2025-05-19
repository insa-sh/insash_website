import { Component } from "@angular/core";
import { DocumentService } from "src/app/interaction-backend/document.service";
import { Categorie } from "src/app/models/categorie";


// Importer la fonction toggleNavigationMenu() dans la page
declare function toggleNavigationMenu(): void;
declare function getDate(): String;
declare function getMonth(): String;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  day = getDate();
  month = getMonth();

  categories: Categorie[] = [];

  // Insérer le kit d'icones fontawesome (balise script)
  constructor(private documentService: DocumentService) {
    this.loadScripts();
  }

  fetchCategories() {
    this.documentService.getArticleCategorie().subscribe((data: any) => {
      if (data) {
        this.categories = data["data"];
      } else {
        this.categories = [];
      }
    });
  }

  ngOnInit() {
    this.fetchCategories();
  }

  // Method to dynamically load JavaScript
  loadScripts() {
    // This array contains all the files/CDNs
    const dynamicScripts = ["public/scripts/navMenu.js"];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement("script");
      node.src = dynamicScripts[i];
      node.type = "text/javascript";
      node.async = false;
      document.getElementsByTagName("head")[0].appendChild(node);
    }
  }
}
