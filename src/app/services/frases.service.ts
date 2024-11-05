import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private apiUrl = 'https://v2.jokeapi.dev/joke/Any'; // URL de la API para obtener chistes

  constructor(private http: HttpClient) {}

  getJoke(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
