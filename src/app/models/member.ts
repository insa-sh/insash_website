import { NullString } from "./null-string";

export class Member {

    constructor(  
        public firstname: NullString,
        public lastname: NullString,
        public role: NullString,
        public website: NullString,
        public image_address: NullString,
        public linkedin: NullString,
        public github: NullString,
        public instagram: NullString,
        public citation: NullString,
        public surname: NullString,
        public username: String,
        public status: NullString,
        public archived: boolean
      ){}

      
}
