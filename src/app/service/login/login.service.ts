import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private isAuthenticated = false;
  #userLogin = inject(UsersService);

  login(username: string, password: string): Observable<{ success: boolean, user: any | null }> {
    return this.#userLogin.getUserByUsername(username).pipe(
    map(user => {
    if (!user || user.password !== password) {
          return { success: false, user: null };
        }
        localStorage.setItem('user', JSON.stringify(user));
        return { success: true, user };
      })
    );
    }

  getUser(): Observable<{ success: boolean, user: any | null }> {
    return this.#userLogin.getUsers().pipe(
    map(user => {

        localStorage.setItem('user', JSON.stringify(user));
        return { success: true, user };
      })
    );
    }

  logout(): Observable<{ success: boolean  }> {
    localStorage.removeItem("user");
    this.isAuthenticated = false;
    return of({ success: true });
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('user') !== null;
  }

}
  