/**
 * Created by bothmena on 12/06/17.
 */

import { tassign } from 'tassign';
import { AppAction } from '../shared/models/app-action';
import { SecurityState } from './shared/models/security-state';

export class SecurityReducer {

    protected _state: SecurityState;
    protected _action: AppAction;

    constructor( state: SecurityState, action: AppAction ) {

        this._state  = state;
        this._action = action;
    }

    securityIncrementReducer(): SecurityState {

        return tassign( this._state, { securityCount: this._state.securityCount + 1 } );
    }

    securityDecrementReducer(): SecurityState {

        return tassign( this._state, { securityCount: this._state.securityCount - 1 } );
    }
}
