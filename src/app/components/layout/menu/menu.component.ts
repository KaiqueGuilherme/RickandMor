import { Component, inject } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { LoginService } from '../../../service/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MdbCollapseModule,MdbDropdownModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  router = inject(Router);
  constructor(private LoginService: LoginService) { }
logout(){
  this.LoginService.logout();
  this.router.navigate(['/login'])
}
}
