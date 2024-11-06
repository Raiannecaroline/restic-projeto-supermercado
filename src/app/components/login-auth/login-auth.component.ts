import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent implements OnInit {

  isLoggedIn: boolean = false;
  //isAuthenticated$: Observable<boolean>
  profile!: User | null | undefined;

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Autualiza o estado do login do usuário
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLoggedIn = isAuthenticated;
      if (isAuthenticated) {
        this.authService.user$.subscribe(user => {
          this.profile = user;
        });
      }
    });
  }

  login(): void {
    this.authService.loginWithRedirect();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
