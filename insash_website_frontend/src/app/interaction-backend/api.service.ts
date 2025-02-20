import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  static getBaseUrl(): string {
    if (environment.production) {
      const fullUrl = window.location.href;
      const url = new URL(fullUrl);
      return `${url.protocol}//${url.host}/insash-website-data`;
    } else {
      return "http://localhost:1337";
    }
  }
}
