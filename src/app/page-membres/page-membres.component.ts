import { Component } from '@angular/core';
import { Member } from "src/app/models/member";


@Component({
  selector: 'app-page-membres',
  templateUrl: './page-membres.component.html',
  styleUrls: ['./page-membres.component.css']
})
export class PageMembresComponent {
  membres: Member[] = [
    {
      id: 0,
      name: "Sss",
      last_name: "Sss",
      pseudo: "ssssss",
      role: "Président",
      bureau_comment: "// si tu fais planter le site t’auras affaire à lui",
      photo: "/assets/images/pp/0",
      email: "president@insash.org",
      email_visible: true,
    },
    {
      id: 1,
      name: "Rrr",
      last_name: "Ccc",
      pseudo: "rrrccc",
      role: "Trésorier",
      bureau_comment: "// Money Money Money - Abba",
      photo: "/assets/images/pp/1",
      email: "tresorier@insash.org",
      email_visible: true,
    },
    {
      id: 2,
      name: "Aaa",
      last_name: "Lll",
      pseudo: "aaalll",
      role: "Secrétaire",
      bureau_comment: undefined,
      photo: "/assets/images/pp/2",
      email: "secretaire@insash.org",
      email_visible: true,
    },
    {
      id: 3,
      name: "Bbb",
      last_name: "Bbb",
      pseudo: "bbbbbb",
      role: "Respo Communication & Graphismes",
      bureau_comment: undefined,
      photo: "/assets/images/pp/3",
      email: "communication@insash.org",
      email_visible: false,
    },
    {
      id: 4,
      name: "TTT",
      last_name: "Ccc",
      pseudo: "tttccc",
      role: "Membre ",
      bureau_comment: undefined,
      photo: "/assets/images/pp/4",
      email: "",
      email_visible: false,
    }

  ];
}
