import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { isDevMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityModule } from './security-section/security.module';
import { INIT_STATE, State } from './shared/models/state';
import { ABONavigatorService } from './shared/services/abo-navigator.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { rootReducer } from './store';
import { WebsiteModule } from './website-section/website.module';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';

@NgModule( {
    declarations: [
        AppComponent,
    ],
    imports     : [
        BrowserModule.withServerTransition( { appId: 'ng4-starter' } ),
        FormsModule,
        HttpModule,
        WebsiteModule,
        SecurityModule,
        AppRoutingModule,
        NgReduxModule,
        MaterializeModule,
    ],
    providers   : [
        ABONavigatorService,
        AuthGuardService,
        AuthenticationService,
    ],
    bootstrap   : [ AppComponent ],
} )

export class AppModule {

    constructor( ngRedux: NgRedux<State>, devTools: DevToolsExtension ) {

        // Tell @angular-redux/store about our rootReducer and our initial state.
        // It will use this to create a redux store for us and wire up all the
        // events.
        const storeEnhancers = devTools.isEnabled() && isDevMode() ?
                               [ devTools.enhancer() ] : [];

        ngRedux.configureStore( rootReducer, INIT_STATE, [], storeEnhancers );

    }
}
