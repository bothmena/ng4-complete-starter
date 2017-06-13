import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SecurityComponent } from './security/security.component';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityGuard } from './shared/services/security-guard.service';

@NgModule( {
    declarations: [SignupComponent, LoginComponent, SecurityComponent],
    imports     : [
        CommonModule,
        FormsModule,
        HttpModule,
        SecurityRoutingModule
    ],
    providers   : [
        SecurityGuard
    ],
} )

export class SecurityModule {
}
