import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { HomeComponent } from './components/layout/home/home.component';
import { PersonagenslistComponent } from './components/personagens/personagenslist/personagenslist.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"**", redirectTo:"dashboard/personagens", pathMatch:"full"},
    {path:"login", component: LoginComponent},
    {path:"dashboard", component: HomeComponent,canActivate: [authGuard], children: [
        {path: "personagens", component: PersonagenslistComponent},
        {path: "personagem/:idPersonagem", component: PersonagenslistComponent}
    ]}
];
