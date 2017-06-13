import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppActions } from './app.actions';
import { State } from './shared/models/state';

@Component( {
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : [ './app.component.css' ],
} )
export class AppComponent {

    @select( ( s: State ) => s.app.appCount ) readonly appCount$: Observable<number>;
    @select( ( s: State ) => s.security.securityCount ) readonly securityCount$: Observable<number>;
    @select( ( s: State ) => s.website.websiteCount ) readonly websiteCount$: Observable<number>;

    constructor( private ngRedux: NgRedux<State> ) {

    }

    increment() {

        this.ngRedux.dispatch( AppActions.appIncrement() );
    }

    decrement() {

        this.ngRedux.dispatch( AppActions.appDecrement() );
    }
}
