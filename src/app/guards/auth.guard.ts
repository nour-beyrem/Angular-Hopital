
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../authentification/account.service';
import { TokenService } from '../authentification/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private accountService: AccountService,
    private router: Router
  ) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if(!this.tokenService.loggedIn()) {
        this.router.navigateByUrl('/login');
        this.tokenService.remove();
        this.accountService.changeAuthStatus(false);
        return false;
     }
     console.warn('ok')
     return true;
  }

}
