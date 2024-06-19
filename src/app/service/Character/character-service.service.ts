import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  http = inject(HttpClient);
  constructor() { }
  
  apiUrl = 'https://rickandmortyapi.com/api/character';
  
  getCharacters(page: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}`;
    return this.http.get(url);
  }
}
