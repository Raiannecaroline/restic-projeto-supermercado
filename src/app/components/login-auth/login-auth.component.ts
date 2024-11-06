import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent implements OnInit {

  isHome: boolean = false;
  isLoggedIn: boolean = false;
  isAuthenticated$: Observable<boolean>
  profile!: User | null | undefined;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.isAuthenticated$ = this.auth.isAuthenticated$
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.loginWithRedirect();
    console.log(this.auth)
  }

}
