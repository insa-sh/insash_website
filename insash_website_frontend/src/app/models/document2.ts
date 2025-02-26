import { Member } from "./member";
import { Image } from "./image";
import { Tag } from "./tag";

export class Document2 {
  constructor(
    public titre: string,
    public tags: Tag[] | null,
    public auteur: Member[],
    public contenu: String,
    public date: string,
    public description: String,
    public image: Image,
    public slug: string,
    public locale: String
  ) {}
}
