export class Document {

    constructor(  
        public title: string,
        public type: string,
        public tags: string[],
        public content_address: string,
        public date: string,
        public description: string,
        public image_address: string,
        public slug: string,
        public is_image_icon: boolean
      ){}

      
}