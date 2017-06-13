import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { State } from '../../shared/models/state';
import { SecurityActions } from '../security.actions';

@Component( {
    template: `
        <h5>Security Section</h5>
        <ul>
            <li><a routerLink="/security/login">Login</a></li>
            <li><a routerLink="/security/signup">Signup</a></li>
        </ul>
        <div>
            <p>
                <span>appCount = {{ appCount$ | async }} | </span>
                <span>securityCount = {{ securityCount$ | async }} | </span>
                <span>websiteCount = {{ websiteCount$ | async }} </span>
            </p>
            <p>
                Incrementing App count: 
                <button class="waves-effect waves-light btn" (click)="increment()">+</button>
                <button class="waves-effect waves-light btn" (click)="decrement()">-</button>
            </p>
        </div>
        <router-outlet></router-outlet>
    `,
} )
export class SecurityComponent {

    @select( ( s: State ) => s.app.appCount ) readonly appCount$: Observable<number>;
    @select( ( s: State ) => s.security.securityCount ) readonly securityCount$: Observable<number>;
    @select( ( s: State ) => s.website.websiteCount ) readonly websiteCount$: Observable<number>;

    constructor( private ngRedux: NgRedux<State> ) {

    }

    increment() {

        this.ngRedux.dispatch( SecurityActions.securityIncrement() );
    }

    decrement() {

        this.ngRedux.dispatch( SecurityActions.securityDecrement() );
    }
}
