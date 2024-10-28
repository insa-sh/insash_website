import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = this.getApiUrl();
  }

  private getApiUrl(): string {
    if (environment.useDynamicApiUrl) {
      const fullUrl = window.location.href;
      const url = new URL(fullUrl);
      return `${url.protocol}//${url.host}/api/`;
    } else {
      return environment.apiUrl;
    }
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }
}
