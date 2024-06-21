import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {
  http = inject(HttpClient);
  constructor() { }
  
  api = 'https://rickandmortyapi.com/api/character';
  
  getCharacters(page: number): Observable<any> {
    const url = `${this.api}/?page=${page}`;
    return this.http.get<any>(url);
  }

  getCharactersSearch(character: string): Observable<any> {
    const url = `${this.api}/?name=${character}`;
    return this.http.get<any>(url);
  }

  getCharacterByid(character: number): Observable<any> {
    const url = `${this.api}/?name=${character}`;
    return this.http.get<any>(url);
  }


}
