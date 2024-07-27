import { NullString } from "./null-string";

export enum DocumentType {
  project = "project",
  cheatsheet = "cheatsheet",
  tips = "tips",
  news = "news",
}
export class Document {

  


    constructor(  
        public title: string,
        public type: DocumentType,
        public tags: string[],
        public content_address: NullString,
        public date: string,
        public description: NullString,
        public image_address: string,
        public slug: string,
        public is_image_icon: boolean,
        public project_address: NullString,
        public github_address: NullString,
      ){}

      
}