/**
 * Created by bothmena on 12/06/17.
 */

import { Injectable } from '@angular/core';
import { AppAction } from 'app/shared/models/app-action';

@Injectable()
export class SecurityActions {

    static SECURITY_INCREMENT = 'SECURITY_INCREMENT';
    static SECURITY_DECREMENT = 'SECURITY_DECREMENT';

    static securityIncrement(): AppAction {

        return { type: SecurityActions.SECURITY_INCREMENT };
    }

    static securityDecrement(): AppAction {

        return { type: SecurityActions.SECURITY_DECREMENT };
    }
}
