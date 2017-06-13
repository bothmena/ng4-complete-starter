import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website-section/home/home.component';
import { PageNotFoundComponent } from './website-section/page-not-found/page-not-found.component';

const routes: Routes = [

    { path: '', component: HomeComponent, },
    { path: '**', component: PageNotFoundComponent, },
    /*{
         path        : 'security',
         loadChildren: './security-section/security.module#SecurityModule',
     },*/
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ],
} )
export class AppRoutingModule {
}
