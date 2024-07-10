export class Document {

    constructor(
        public title: string,
        public type: string,
        public tags: string[],
        public content: string,
        public date: string,
        public description: string,
        public image: string,
        public slug: string
      ){}

      
}