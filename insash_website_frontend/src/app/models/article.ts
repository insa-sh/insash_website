import { Categorie } from "./categorie";
import { Image } from "./image";
import { Member } from "./member";
import { Tag } from "./tag";
import { NullString } from "./null-string";
import { Document2 } from "./document2";

export class Article extends Document2 {
  constructor(
    titre: string,
    tags: Tag[] | null,
    auteur: Member[],
    contenu: String,
    date: string,
    description: String,
    image: Image,
    slug: string,
    public categorie: Categorie,
    locale: String
  ) {
    super(titre, tags, auteur, contenu, date, description, image, slug, locale);
  }
}
