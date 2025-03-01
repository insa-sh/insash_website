import { Member } from "./member";
import { Image } from "./image";
import { Tag } from "./tag";
import { Document } from "./document";

export class Projet extends Document {
  constructor(
    titre: string,
    tags: Tag[] | null,
    auteur: Member[],
    contenu: String,
    date: string,
    description: String,
    image: Image,
    slug: string,
    public project_url: String | null,
    public github_url: String | null,
    locale: String
  ) {
    super(titre, tags, auteur, contenu, date, description, image, slug, locale);
  }
}
