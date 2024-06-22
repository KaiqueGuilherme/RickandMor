import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2'; // Importando SweetAlert2 para exibição de mensagens
import { LoginService } from '../../../service/login/login.service'; 


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 // Propriedades para armazenar o nome de usuário e senha inseridos pelo usuário
 username!: string;
 password!: string;

 // Injeção do serviço de login e do roteador
 loginService = inject(LoginService);
 private router = inject(Router);

 constructor() { }

 // Método para realizar o login
 login() {
   // Chamada ao método de login do serviço
   this.loginService.login(this.username, this.password).subscribe({
     next: response => {
       // Callback para sucesso na resposta
       if (response.success) {
         // Redireciona para a página principal após o login bem-sucedido
         this.router.navigate(['/dashboard/personagens']);
         // Exibe um alerta de sucesso utilizando SweetAlert2
         Swal.fire({
           icon: 'success',
           title: 'Logado com sucesso',
           confirmButtonText: 'Continuar',
           confirmButtonColor: '#3085d6'
         });
       } else {
         // Exibe um alerta de aviso caso as credenciais sejam inválidas
         Swal.fire({
           icon: 'warning',
           title: 'Informações inválidas',
           text: 'Suas credenciais estão inválidas',
           confirmButtonText: 'Continuar',
           confirmButtonColor: '#3085d6'
         });
       }
     },
     error: err => {
       // Callback para tratamento de erro na requisição de login
       console.error('Erro ao realizar login:', err); // Loga o erro no console para debug
       // Exibe um alerta de erro genérico utilizando SweetAlert2
       Swal.fire({
         title: 'Erro!',
         text: 'Erro ao realizar login',
         icon: 'error',
         confirmButtonText: 'Continuar'
       });
     }
   });
 }
}
