import { Member } from "./member";
import { Document } from "./document";

export class DocumentAndAuthor {

    constructor(  
        public document: Document,
        public author: Member[]
      ){}

      
}