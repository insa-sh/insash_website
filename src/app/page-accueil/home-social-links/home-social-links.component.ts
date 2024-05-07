import { Component } from '@angular/core';

@Component({
  selector: 'app-home-social-links',
  templateUrl: './home-social-links.component.html',
  styleUrls: ['./home-social-links.component.css']
})
export class HomeSocialLinksComponent {
  reseaux = [
    {
      nom: "LinkedIn",
      url: "https://www.linkedin.com/company/insa-sh/",
      icon: "fa-brands fa-linkedin",
    },
    {
      nom: "Instagram",
      url: "https://www.instagram.com/hdf_insa.sh",
      icon: "fa-brands fa-instagram",
    },
    {
      nom: "Discord",
      url: "https://discord.gg/rtYZMdJW7r",
      icon: "fa-brands fa-discord",
    },
    {
      nom: "GitBucket",
      url: "https://git.insash.fr",
      icon: "fa-brands fa-square-git ",
    },
    {
      nom: "GitHub Organization",
      url: "",
      icon: "fa-brands fa-github",
    }

  ];

}
