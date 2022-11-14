import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router, 
        private loginService: LoginService) { }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            const isAuth = this.loginService.getAuth();
            
            if(!isAuth) {
                this.router.navigate(['/homepage']);
            }
            return isAuth;
        }
}