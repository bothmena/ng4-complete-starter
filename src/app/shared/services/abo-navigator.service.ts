/**
 * Created by bothmena on 10/03/17.
 */

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class ABONavigatorService {

    constructor( private _router: Router ) {
    }

    public goto( routeName: string, ...params: string[] ) {

        switch ( routeName ) {

            //WebsiteModule
            case 'w_hm':
                this._router.navigate( [ '/' ] );
                break;
            case 'w_abt':
                this._router.navigate( [ 'about' ] );
                break;

            //SecurityModule
            case 's_lgn':
                this._router.navigate( [ 'login' ] );
                break;
            case 's_sgn':
                this._router.navigate( [ 'signup' ] );
                break;
            /*case 'complicated':
                this._router.navigate( [ 'u', params[0], 'mosques' ] );
                break;*/
        }
    }
}
