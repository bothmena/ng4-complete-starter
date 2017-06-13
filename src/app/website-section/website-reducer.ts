/**
 * Created by bothmena on 12/06/17.
 */

import { tassign } from 'tassign';
import { AppAction } from '../shared/models/app-action';
import { WebsiteState } from './shared/models/website-state';

export class WebsiteReducer {

    protected _state: WebsiteState;
    protected _action: AppAction;

    constructor( state: WebsiteState, action: AppAction ) {

        this._state  = state;
        this._action = action;
    }

    websiteIncrementReducer(): WebsiteState {

        console.log( 'websiteIncrementReducer', this._state.websiteCount );
        return tassign( this._state, { websiteCount: this._state.websiteCount + 1 } );
    }

    websiteDecrementReducer(): WebsiteState {

        console.log( 'websiteDecrementReducer', this._state.websiteCount );
        return tassign( this._state, { websiteCount: this._state.websiteCount - 1 } );
    }
}
