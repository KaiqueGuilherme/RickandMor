import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Verificação de autenticação
  private isAuthenticated = false;

  // Injeta o serviço de usuário para podermos usar suas funcionalidades
  #userLogin = inject(UsersService);

  // Serviço de login: Busca usuário pelo nome e retorna como false ou true
  login(username: string, password: string): Observable<{ success: boolean, user: any | null }> {
    return this.#userLogin.getUserByUsername(username).pipe(
      map(user => {
        if (!user || user.password !== password) {
          // Se a verificação falhar, não permite que o usuário passe
          return { success: false, user: null };
        }
        // Salva no localStorage
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true, user };
      })
    );
  }

  // Responsável por pegar o usuário no localStorage
  getUser(): Observable<{ user: any[] | null }> {
    let user = localStorage.getItem('user'); // Pega o objeto <user> do localStorage
    let userObj: any[] | null = user ? JSON.parse(user) : null; // Transforma o objeto em JSON
    return of({ user: userObj }); // Retorna o objeto
  }

  // Responsável por fazer o logout da aplicação
  logout(): Observable<{ success: boolean }> {
    localStorage.removeItem("user"); // Remove o objeto <user>
    this.isAuthenticated = false; // Altera o estado de autenticado
    return of({ success: true }); // Retorna true
  }

  // Verifica se o usuário está logado
  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('user') !== null;
  }


}
