import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website/website.component';

const websiteRoutes: Routes = [
    {path: '', component: WebsiteComponent, children: [
        {path: '', component: HomeComponent},           //w_hm
        { path: 'about', component: AboutComponent },    //w_ulst
    ]},
];

@NgModule( {
    imports: [ RouterModule.forChild( websiteRoutes ) ],
    exports: [ RouterModule ],
} )
export class WebsiteRoutingModule {
}
