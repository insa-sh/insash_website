import { Image } from "./image";

export class Member {
  constructor(
    public prenom: String | null,
    public nom: String | null,
    public role: String,
    public personnal_website: String | null,
    public documentId: String,
    public image: Image,
    public linkedin: String | null,
    public github: String | null,
    public instagram: String | null,
    public citation: String | null,
    public surnom: String | null,
    public username: String,
    public archive: boolean,
    public website: String | null
  ) {}
}
