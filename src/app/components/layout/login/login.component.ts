import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import Swal from 'sweetalert2';
import { LoginService } from '../../../service/login/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private LoginService: LoginService) { }

  router = inject(Router);

  login() {
    this.LoginService.login(this.username, this.password).subscribe({
      next: response => {
        if (response.success) {
          this.router.navigate(['/dashboard/personagens']);
          Swal.fire({
            icon: 'success',
            title: 'Login Bem sucedido',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#3085d6'
          });
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'Dados incorretos',
            text: 'Precisamos dos seus dados de autenticação para concluir',
            confirmButtonText: 'Continuar',
            confirmButtonColor: '#3085d6'
          });
        }
      },
      error: err =>{
        console.log(err);
          Swal.fire({
            title: 'Error!',
            text: 'Erro ao Buscar o Lead!',
            icon: 'error',
            confirmButtonText: 'Continuar'
          });
      }
      });
    }
}
