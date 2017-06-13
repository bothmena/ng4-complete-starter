/**
 * Created by bothmena on 12/06/17.
 */

import { combineReducers } from 'redux';
import { appReducer } from './app.store';
import { securityReducer } from './security-section/security.store';
import { websiteReducer } from './website-section/website.store';
import { State } from './shared/models/state';

export const rootReducer = combineReducers<State>( {

    app     : appReducer,
    security: securityReducer,
    website : websiteReducer,
} );
