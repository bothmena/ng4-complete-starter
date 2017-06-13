import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SecurityComponent } from './security/security.component';
import { SecurityGuard } from './shared/services/security-guard.service';
import { SignupComponent } from './signup/signup.component';

const securityRoutes: Routes = [
    {
        path            : 'security',
        component       : SecurityComponent,
        canActivate     : [ SecurityGuard ],
        canActivateChild: [ SecurityGuard ],
        children        : [
            { path: 'login', component: LoginComponent },                           //s_lgn
            { path: 'signup', component: SignupComponent },                         //s_sgn
        ],
    },
];

@NgModule( {
    imports: [ RouterModule.forChild( securityRoutes ) ],
    exports: [ RouterModule ],
} )
export class SecurityRoutingModule {
}
