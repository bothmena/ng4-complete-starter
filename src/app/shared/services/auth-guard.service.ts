/**
 * Created by bothmena on 20/01/17.
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { ABONavigatorService } from './abo-navigator.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor( private authService: AuthenticationService, private _navigator: ABONavigatorService ) {
    }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {

        let url: string = state.url;
        return this.checkLogin( url );
    }

    canActivateChild( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {

        return this.canActivate( route, state );
    }

    checkLogin( url: string ): boolean {

        if ( this.authService.isLoggedIn() )
            return true;
        this.authService.redirectUrl = url;
        this._navigator.goto( 's_lgn' );
        return false;
    }
}
