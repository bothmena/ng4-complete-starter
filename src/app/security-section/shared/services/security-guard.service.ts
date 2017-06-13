import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { ABONavigatorService } from '../../../shared/services/abo-navigator.service';
import { AuthenticationService } from '../../../shared/services/authentication.service';
/**
 * Created by bothmena on 12/02/17.
 */

@Injectable()
export class SecurityGuard implements CanActivate, CanActivateChild {

    constructor( private authService: AuthenticationService, private router: Router,
        private _navigator: ABONavigatorService ) {
    }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {

        // return this.activate();
        return true;
    }

    canActivateChild( childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {

        // return this.activate();
        return true;
    }

    private activate(): boolean {

        if ( !this.authService.isLoggedIn() )
            return true;
        this._navigator.goto( 'u_prf', this.authService.getUsername() );
        return false;
    }
}
