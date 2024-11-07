import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginAuthComponent } from './components/login-auth/login-auth.component';
import { HomeComponent } from './core/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginAuthComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
