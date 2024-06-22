import { Component, inject } from '@angular/core';
import { LoginService } from '../../../service/login/login.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  profile: User | undefined;

  constructor() { 
    this.loadUser();
  }

  loginService = inject(LoginService);
  router = inject(Router);

  loadUser() {
    this.loginService.getUser().subscribe({
      next: (user: any) => {
        console.log(user.user)
      this.profile = user.user[0];
      },
      error: (error: any) => {
        console.error('Error loading characters: ', error);
      }
    });
  }



  exit() {
    this.router.navigate([`/dashboard/personagens`]);
  }
}
