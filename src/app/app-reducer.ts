/**
 * Created by bothmena on 12/06/17.
 */

import { tassign } from 'tassign';
import { AppState } from './shared/models/app-state';
import { AppAction } from './shared/models/app-action';
import { ABOReducer } from './shared/models/abo-reducer';

export class AppReducer extends ABOReducer {

    constructor( state: AppState, action: AppAction ) {

        super( state, action );
    }

    appIncrementReducer(): AppState {

        return tassign( this._state, { appCount: this._state.appCount + 1 } );
    }

    appDecrementReducer(): AppState {

        return tassign( this._state, { appCount: this._state.appCount - 1 } );
    }
}
