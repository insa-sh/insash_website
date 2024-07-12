import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public authors: string[] = ['Louison', 'Maxime', 'Maël', 'Nathan', 'Sylvain', 'Rémi', 'Axel'];
  public tags: string[] = ['jeux video', 'go', 'sf6', 'pokemon', 'feur'];
  public dates: string[] = ["2021-2022", "2022-2023", "2023-2024"];
  public tri: string[] = ["A-Z", "Z-A", "Plus récent", "Plus ancien"];

  showFilter () {
    var filter = document.getElementById('search-filter');
    if (filter!.style.display == "none") {
      filter!.style.display = "flex";
    } else {
      filter!.style.display = "none";
    }
  }
}
