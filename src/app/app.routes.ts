import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { HomeComponent } from './components/layout/home/home.component';
import { PersonagenslistComponent } from './components/personagens/personagenslist/personagenslist.component';
import { AuthGuard } from './auth.guard';
import { PersonagensDetailsComponent } from './components/personagens/personagens-details/personagens-details.component';



export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"login", component: LoginComponent},
    {path:"dashboard", component: HomeComponent,canActivate: [AuthGuard], children: [
        {path: "personagens", component: PersonagenslistComponent},
        {path: "personagem/:idPersonagem", component: PersonagensDetailsComponent}
    ]},
    { path: '**', redirectTo: 'dashboard/personagens', pathMatch: 'full' },
];
