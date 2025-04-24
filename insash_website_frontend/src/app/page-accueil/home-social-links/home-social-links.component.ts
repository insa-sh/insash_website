import { Component } from '@angular/core';

@Component({
  selector: 'app-home-social-links',
  templateUrl: './home-social-links.component.html',
  styleUrls: ['./home-social-links.component.css']
})
export class HomeSocialLinksComponent {
  reseaux = [
    {
      nom: "Discord",
      url: "https://discord.insash.org",
      icon: "fa-brands fa-discord",
    },
    {
      nom: "Instagram",
      url: "https://instagram.insash.org",
      icon: "fa-brands fa-instagram",
    },
    {
      nom: "GitHub Organization",
      url: "https://github.com/insa-sh",
      icon: "fa-brands fa-github",
    },
    {
      nom: "LinkedIn",
      url: "https://www.linkedin.com/company/insa-sh/",
      icon: "fa-brands fa-linkedin",
    },


    // {
    //   nom: "GitBucket",
    //   url: "https://git.insash.org",
    //   icon: "fa-brands fa-square-git ",
    // },


  ];

}
