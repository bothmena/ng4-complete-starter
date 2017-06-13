/**
 * Created by bothmena on 30/05/17.
 */


import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {AppModule} from './app.module';
import {AppComponent} from './app.component';


@NgModule({
  imports: [
    ServerModule,
    AppModule
  ],
  bootstrap: [AppComponent]
})

export class AppServerModule {}

