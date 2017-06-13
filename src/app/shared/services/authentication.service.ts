/**
 * Created by bothmena on 19/01/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AppGlobals } from '../../app.globals';
import { JWTToken } from '../models/jwt-token';
import { ABOHttp } from './abo-http';
import { ABONavigatorService } from './abo-navigator.service';

@Injectable()
export class AuthenticationService extends ABOHttp {

    private _authenticateUrl: string = AppGlobals.BASE_API_URL + AppGlobals.AUTHENTICATE_URL;
    private _refreshTokenUrl: string = AppGlobals.BASE_API_URL + AppGlobals.REFRESH_TOKEN_URL;
    private _redirectUrl             = '';
    private _jwtToken: JWTToken;
    private _rememberMe: boolean;
    // last time token was refreshed: timestamp
    // if _loginTime > 3600 => refresh token
    private _loginTime = 0;

    constructor( private _http: Http, private _router: Router, private _navigator: ABONavigatorService ) {
        super();
        this.retrieveJwtToken();
    }

    public isLoggedIn(): boolean {

        if ( !this._loginTime ) {
            return false;
        }

        if ( Date.now() - this._loginTime < 3540000 ) {
            return true;
        }
        else {

            let status = true;
            this.refreshToken().subscribe(
                jwt => this.onAuthenticateSuccess( jwt ),
                error => status = false,
            );

            return status;
        }
    }

    public logout(): void {

        this._jwtToken  = new JWTToken();
        this._loginTime = 0;
        this.saveJwtToken();
    }

    public set redirectUrl( value: string ) {
        this._redirectUrl = value;
    }

    public authenticate( login: any ): Observable<JWTToken> {

        this._rememberMe = login.rememberMe;
        const headers    = new Headers( { 'content-type': 'application/json' } );
        const options    = new RequestOptions( { headers: headers } );
        const data       = JSON.stringify( { '_username': login.username, '_password': login.password } );

        return this._http.post( this._authenticateUrl, data, options )
            .map( res => this.extractToken( res, login.username ) )
            .catch( AuthenticationService.handleError );
    }

    public getUsername(): string {

        return this._jwtToken.username;
    }

    public onAuthenticateSuccess( jwtToken: JWTToken ) {

        this._jwtToken  = jwtToken;
        this._loginTime = Date.now();
        this.saveJwtToken();
        this.redirect();
    }

    public onAuthenticateFailure( error: string | any ) {

        this._loginTime = 0;
        this._jwtToken  = new JWTToken();
        this.saveJwtToken();
        console.log( error );
    }

    private refreshToken(): Observable<JWTToken> {

        const headers = new Headers( { 'content-type': 'application/json' } );
        const options = new RequestOptions( { headers: headers } );
        const data    = JSON.stringify( { 'refresh_token': this._jwtToken.refreshToken } );

        return this._http.post( this._refreshTokenUrl, data, options )
            .map( res => this.extractToken( res ) )
            .catch( AuthenticationService.handleError );
    }

    private extractToken( res: Response, username: string = '' ): JWTToken {

        const body = res.json();
        username   = username === '' ? this._jwtToken.username : username;
        return JWTToken.buildJWTToken( body, username );
    }

    private redirect(): void {

        if ( this._redirectUrl === '' ) {
            this._navigator.goto( 'u_prf', this._jwtToken.username );
        } else {
            this._router.navigate( [ this._redirectUrl ] );
        }
        this._redirectUrl = '';
    }

    private saveJwtToken() {

        localStorage.setItem( 'username', this._jwtToken.username );
        localStorage.setItem( 'token', this._jwtToken.token );
        localStorage.setItem( 'refresh_token', this._jwtToken.refreshToken );
        localStorage.setItem( 'login_time', this._loginTime + '' );
    }

    private retrieveJwtToken() {

        const username: string      = localStorage.getItem( 'username' );
        const token: string         = localStorage.getItem( 'token' );
        const refresh_token: string = localStorage.getItem( 'refresh_token' );
        const login_time: string    = localStorage.getItem( 'login_time' );

        if ( username && token && refresh_token )
            this._jwtToken = new JWTToken( token, refresh_token, username );
        else
            this._jwtToken = new JWTToken();

        this._loginTime = login_time ? +login_time : 0;
    }
}
