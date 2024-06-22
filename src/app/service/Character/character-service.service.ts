import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  // Injeta o HTTP Client
  http = inject(HttpClient);
  constructor() { }

  // URL da API 
  api = 'https://rickandmortyapi.com/api/character';

  // Buscando todos os personagens: "page" é o número da página que vamos buscar
  getCharacters(page: number): Observable<any> {
    const url = `${this.api}/?page=${page}`; // Formatando o número da página na URL da API
    return this.http.get<any>(url); // Retornando dados em formato de array
  }

  // Buscando personagem por nome: "character" é o nome do personagem que vamos buscar
  getCharactersSearch(character: string): Observable<any> {
    const url = `${this.api}/?name=${character}`; // Formatando o nome do personagem na URL da API
    return this.http.get<any>(url); // Retornando dados
  }

  // Buscando personagem por ID: "id" é o valor que vamos buscar
  getCharacterById(id: number): Observable<any> {
    const url = `${this.api}/${id}`; // Formatando o ID do personagem na URL da API
    return this.http.get<any>(url); // Retornando dados
  }



}
