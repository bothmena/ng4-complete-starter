/**
 * Created by bothmena on 12/06/17.
 */

import { AppAction } from '../shared/models/app-action';
import { SecurityReducer } from './security-reducer';
import { SecurityActions } from './security.actions';
import { INIT_SECURITY_STATE, SecurityState } from './shared/models/security-state';

export function securityReducer( lastState: SecurityState = INIT_SECURITY_STATE, action: AppAction ): SecurityState {

    const securityReducer = new SecurityReducer( lastState, action );

    switch ( action.type ) {
        case SecurityActions.SECURITY_INCREMENT:
            return securityReducer.securityIncrementReducer();
        case SecurityActions.SECURITY_DECREMENT:
            return securityReducer.securityDecrementReducer();
    }

    // We don't care about any other actions right now.
    return lastState;
}
