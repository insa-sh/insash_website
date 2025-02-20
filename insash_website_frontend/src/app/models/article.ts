import { NullString } from "./null-string";

export enum DocumentType {
  project = "project",
  cheatsheet = "cheatsheet",
  tips = "tips",
  news = "news",
}
export class Document {
  constructor(
    public titre: string,
    // tags ?
    // auteurs ?
    // catégorie ?
    public contenu: String,
    public date: string,
    public description: String,
    // image ?
    public slug: string,
    public locale: String
  ) {}
}
