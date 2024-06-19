import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: User[] = [
    { id: 1, name: 'rick', password: 'rick', url: "https://images.thedirect.com/media/article_full/ricky-and-morty-season-7-bad-reviews_AACFzua.jpg?imgeng=/cmpr_60/w_800" }
  ]

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUserByUsername(username: string): Observable<User | null> {
    const user = this.users.find(u => u.name === username);
    return of(user ? user : null);
  }


}