/**
 * Created by bothmena on 12/06/17.
 */

import { INIT_SECURITY_STATE, SecurityState } from '../../security-section/shared/models/security-state';
import { INIT_WEBSITE_STATE, WebsiteState } from '../../website-section/shared/models/website-state';
import { AppState, INIT_APP_STATE } from './app-state';

export interface State {

    app: AppState;
    security: SecurityState;
    website: WebsiteState;
}

export const INIT_STATE = {

    app: INIT_APP_STATE,
    security: INIT_SECURITY_STATE,
    website: INIT_WEBSITE_STATE,
};
