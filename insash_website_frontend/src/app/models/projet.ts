import { Member } from "./member";
import { Image } from "./image";
import { Tag } from "./tag";

export enum DocumentType {
  project = "project",
  cheatsheet = "cheatsheet",
  tips = "tips",
  news = "news",
}
export class Document {
  constructor(
    public titre: string,
    public tag: Tag[] | null,
    public auteur: Member[],
    public contenu: String,
    public date: string,
    public description: String,
    public image: Image,
    public slug: string,
    public project_url: String | null,
    public github_url: String | null,
    public locale: String
  ) {}
}
