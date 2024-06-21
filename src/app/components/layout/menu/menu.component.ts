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

  router = inject(Router);

  constructor(private LoginService: LoginService) { }

  logout() {
    console.log('bateu aqui')
    this.LoginService.logout().subscribe({
      next: response => {
      if (response.success) {
       this.router.navigate(['login']);
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Erro ao Deslogar',
          text: 'Entre em contato com o dev',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#3085d6'
        });
      }
    },
    error: err =>{
      console.log(err);
        Swal.fire({
          title: 'Error!',
          text: 'Erro ao Deslogar',
          icon: 'error',
          confirmButtonText: 'Continuar'
        });
    }});
  }
}
