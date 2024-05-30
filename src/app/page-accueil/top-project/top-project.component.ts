import { Component } from "@angular/core";
import { Project } from "src/app/models/project";

@Component({
  selector: "app-top-project",
  templateUrl: "./top-project.component.html",
  styleUrls: ["./top-project.component.css"],
})
export class TopProjectComponent {
  readonly baseUrl = "/assets/images/projets";

  topProjects: Project[] = [
    {
      id: 487,
      name: "Guerre des Carrés",
      authors: ["Maxime", "Baptiste"],
      tags: ["Jeu", "Web", "JavaScript"],
      photo: `${this.baseUrl}/guerre_des_carre.png`,
      date: new Date(2023, 5),
      icon: true,
    },
    {
      id: 42,
      name: "Ecclogy (Nuit de l'info 2023)",
      authors: ["Maxime", "Baptiste", "Louison", "Maël", "Clément", "Nathan"],
      tags: ["Challenge", "Web", "Django"],
      photo: `${this.baseUrl}/ecclogy.png`,
      date: new Date(2023, 12),
      icon: true,
    },
    {
      id: 777,
      name: "Site web ./insa.sh",
      authors: ["Louison", "Baptiste"],
      tags: ["Web", "Angular"],
      photo: `${this.baseUrl}/web_site.png`,
      date: new Date(2024, 5),
      icon: true,
    },
  ];
}
