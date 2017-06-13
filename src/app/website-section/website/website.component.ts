import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { State } from '../../shared/models/state';
import { WebsiteActions } from '../website-actions';

@Component( {
    template: `
        <h6>Website Section</h6>
        <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/about">About</a></li>
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
export class WebsiteComponent {

    @select( ( s: State ) => s.app.appCount ) readonly appCount$: Observable<number>;
    @select( ( s: State ) => s.security.securityCount ) readonly securityCount$: Observable<number>;
    @select( ( s: State ) => s.website.websiteCount ) readonly websiteCount$: Observable<number>;

    constructor( private ngRedux: NgRedux<State> ) {
    }

    increment() {

        this.ngRedux.dispatch( WebsiteActions.websiteIncrement() );
    }

    decrement() {

        this.ngRedux.dispatch( WebsiteActions.websiteDecrement() );
    }
}
