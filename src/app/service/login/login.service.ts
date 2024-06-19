import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private isAuthenticated = false;
  #userLogin = inject(UsersService);
  router = inject(Router);
  
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

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('user') !== null;
  }

}
  