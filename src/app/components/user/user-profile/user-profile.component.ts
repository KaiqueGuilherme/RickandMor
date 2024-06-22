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
    // Sempre executar essa função ao carregar a página
    this.loadUser();
  }

  // Injetando LoginService
  loginService = inject(LoginService);
  // Injetando Router
  router = inject(Router);

  // Buscando informações do usuário
  loadUser() {
    this.loginService.getUser().subscribe({
      // Se a busca for bem-sucedida, atribui o usuário ao perfil
      next: (user: any) => {
        this.profile = user.user;
      },
      // Em caso de erro, exibe uma mensagem de erro no console
      error: (error: any) => {
        console.error('Error loading user information: ', error);
      }
    });
  }

  // Navega para a página de personagens no dashboard ao sair
  exit() {
    this.router.navigate(['/dashboard/personagens']);
  }

}
