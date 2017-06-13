/**
 * Created by bothmena on 12/06/17.
 */

import { Injectable } from '@angular/core';
import { AppAction } from 'app/shared/models/app-action';
// import { Action } from 'redux';

@Injectable()
export class AppActions {

    static APP_INCREMENT = 'APP_INCREMENT';
    static APP_DECREMENT = 'APP_DECREMENT';

    static appIncrement(): AppAction {

        // return new AppAction( AppActions.APP_INCREMENT );
        return { type: AppActions.APP_INCREMENT };
    }

    static appDecrement(): AppAction {

        // return new AppAction( AppActions.APP_DECREMENT );
        // AppAction( AppActions.APP_DECREMENT );
        return { type: AppActions.APP_DECREMENT };
    }
}
