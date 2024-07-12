import { Member } from "../interaction-backend/member";
import { Document } from "./document";

export class DocumentAndAuthor {

    constructor(  
        public document: Document,
        public authors: Member[]
      ){}

      
}