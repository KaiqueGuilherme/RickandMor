import { Component, inject } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { LoginService } from '../../../service/login/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MdbCollapseModule, MdbDropdownModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  // Injeção do serviço de roteamento
  router = inject(Router);
  // Injeção do serviço de login
  LoginService = inject(LoginService);

  constructor() { }
 // Método para logout do usuário
 logout() {
  console.log('Chamou o método logout'); // Apenas para debug, pode ser removido
  this.LoginService.logout().subscribe({
    next: response => {
      if (response.success) {
        // Redireciona para a página de login se o logout for bem-sucedido
        this.router.navigate(['login']);
      } else {
        // Exibe um alerta de erro se o logout não for bem-sucedido
        Swal.fire({
          icon: 'warning',
          title: 'Erro ao Deslogar',
          text: 'Entre em contato com o desenvolvedor',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#3085d6'
        });
      }
    },
    error: err => {
      console.error('Erro ao deslogar:', err); // Log do erro no console para debug
      // Exibe um alerta de erro genérico se ocorrer um erro durante o logout
      Swal.fire({
        title: 'Erro!',
        text: 'Erro ao Deslogar',
        icon: 'error',
        confirmButtonText: 'Continuar'
      });
    }
  });
}
}
