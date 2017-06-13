/**
 * Created by bothmena on 12/06/17.
 */

import { Injectable } from '@angular/core';
import { AppAction } from 'app/shared/models/app-action';

@Injectable()
export class WebsiteActions {

    static WEBSITE_INCREMENT = 'WEBSITE_INCREMENT';
    static WEBSITE_DECREMENT = 'WEBSITE_DECREMENT';

    static websiteIncrement(): AppAction {

        return { type: WebsiteActions.WEBSITE_INCREMENT };
    }

    static websiteDecrement(): AppAction {

        return { type: WebsiteActions.WEBSITE_DECREMENT };
    }
}
