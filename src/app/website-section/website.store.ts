/**
 * Created by bothmena on 12/06/17.
 */

import { AppAction } from '../shared/models/app-action';
import { INIT_WEBSITE_STATE, WebsiteState } from './shared/models/website-state';
import { WebsiteReducer } from './website-reducer';
import { WebsiteActions } from './website-actions';

export function websiteReducer( lastState: WebsiteState = INIT_WEBSITE_STATE, action: AppAction ): WebsiteState {

    const websiteReducer = new WebsiteReducer( lastState, action );

    switch ( action.type ) {
        case WebsiteActions.WEBSITE_INCREMENT:
            return websiteReducer.websiteIncrementReducer();
        case WebsiteActions.WEBSITE_DECREMENT:
            return websiteReducer.websiteDecrementReducer();
    }

    // We don't care about any other actions right now.
    return lastState;
}
