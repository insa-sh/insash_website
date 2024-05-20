
export interface Member {
    id: number;
    name: string;
    last_name: string;
    pseudo: string;
    role: string;
    bureau_comment?: string;
    description?: string;
    photo?: string;
    email: string;
    email_visible: boolean;
    personal_link?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  }