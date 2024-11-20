import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brewery } from '../models/brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private apiUrl = 'https://api.openbrewerydb.org/v1';

  constructor(private http: HttpClient) {}

  searchBreweries(query: string, by_type?: string): Observable<Brewery[]> {
    let url = `${this.apiUrl}/breweries/search?query=${query}`;
    if (by_type) {
      url += `&by_type=${by_type}`;
    }
    return this.http.get<Brewery[]>(url);
  }

  getBreweries(page: number = 1, perPage: number = 10, by_type?: string): Observable<Brewery[]> {
    let url = `${this.apiUrl}/breweries?page=${page}&per_page=${perPage}`;
    if (by_type) {
      url += `&by_type=${by_type}`;
    }
    return this.http.get<Brewery[]>(url);
  }

  getBreweryById(id: string): Observable<Brewery> {
    return this.http.get<Brewery>(`${this.apiUrl}/breweries/${id}`);
  }
}
