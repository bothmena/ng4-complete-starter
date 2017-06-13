/**
 * Created by bothmena on 22/01/17.
 */

export class JWTToken {

    private _username: string;
    private _token: string;
    private _refreshToken: string;

    public static buildJWTToken( object: any, username: string = '' ): JWTToken {

        const jwtToken = new JWTToken();

        jwtToken.token        = object.token ? object.token : '';
        jwtToken.refreshToken = object.refresh_token ? object.refresh_token : '';
        jwtToken.username     = username;

        return jwtToken;
    }

    constructor( token: string = '', refreshToken: string = '', username: string = '' ) {

        this._token        = token;
        this._refreshToken = refreshToken;
        this._username     = username;
    }

    get username(): string {
        return this._username;
    }

    set username( value: string ) {
        this._username = value;
    }

    get token(): string {
        return this._token;
    }

    set token( value: string ) {
        this._token = value;
    }

    get refreshToken(): string {
        return this._refreshToken;
    }

    set refreshToken( value: string ) {
        this._refreshToken = value;
    }
}
