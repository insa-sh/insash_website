
export interface Member {
    id: number;
    name: string;
    last_name: string;
    pseudo: string;
    role_tag: string;
    role: string;
    bureau_comment?: string;
    description?: string;
    photo?: string; //lien relatif ex: assets/images/...
    email: string;
    email_visible: boolean;
    personal_link?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  }