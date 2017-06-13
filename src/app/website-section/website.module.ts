import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WebsiteComponent } from './website/website.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule( {
    declarations: [
        WebsiteComponent ,
        HomeComponent,
        AboutComponent,
        PageNotFoundComponent,
    ],
    imports     : [
        CommonModule,
        FormsModule,
        HttpModule,
        WebsiteRoutingModule
    ],
    providers   : [],
} )

export class WebsiteModule {
}
