import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { SearchResultCity } from '../interface/search-result-city.model';
import { CityResult } from '../interface/city.result.model';


@Injectable({
  providedIn: 'root',
})
export class ServiceService {
    private readonly API = environment.API;
    city: CityResult[] = [];

    constructor(private http: HttpClient) {}
    
    public get(cidade: string) {
        return this.http.get(`${this.API}/${cidade}`);
      }

      public post<Request, Response>(
        cidade: string,
        body: Request
      ): Observable<Response> {
        return this.http.post<Response>(`${this.API}/${cidade}`, body);
      }

      cityList(dado: string) {
        return this.http.get<SearchResultCity>(
          `${this.API}/search/city${dado}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/vnd.github+json',
            },
          }
        );
      }
      getCity(dado: string) {
        return this.http.get<CityResult>(`${this.API}/city/${dado}`);
      }
}