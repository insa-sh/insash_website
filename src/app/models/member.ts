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
        public citation: NullString,
        public surname: NullString,
        public status: NullString,
        public archived: boolean
      ){}

      
}
