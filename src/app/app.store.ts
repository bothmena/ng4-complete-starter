import { AppState, INIT_APP_STATE } from './shared/models/app-state';
import { AppAction } from './shared/models/app-action';
import { AppReducer } from './app-reducer';
import { AppActions } from './app.actions';
/**
 * Created by bothmena on 12/06/17.
 */

export function appReducer( lastState: AppState = INIT_APP_STATE, action: AppAction ): AppState {

    const appReducer = new AppReducer( lastState, action );

    switch ( action.type ) {
        case AppActions.APP_INCREMENT:
            return appReducer.appIncrementReducer();
        case AppActions.APP_DECREMENT:
            return appReducer.appDecrementReducer();
    }

    // We don't care about any other actions right now.
    return lastState;
}
