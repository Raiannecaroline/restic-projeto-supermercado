import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  user$: Observable<any> = this.authService.user$;
  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private authService: AuthService
  ) { }

   // Função para realizar o login do usuario
  login(): void {
    this.authService.loginWithRedirect();
  }

  // Função para realizar o logout do usuario
  logout(): void {
    this.authService.logout().subscribe(() => {
      window.location.href = '/';
    });
  }

  // Verificar se o usuário está autenticado
  isAuthenticated(): Observable<boolean> {
    return this.authService.isAuthenticated$;
  }

  // Obter o token de acesso
  getAccessToken(): Observable<string | null> {
    return this.authService.getAccessTokenSilently();
  }
}
