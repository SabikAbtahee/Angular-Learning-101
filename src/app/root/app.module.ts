import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/root-default/app.component';
import { SharedModule } from '../shared/shared.module';
import { RootSecondComponent } from './components/root-second/root-second.component';
import { RootThirdComponent } from './components/root-third/root-third.component';
import { ConfigModule } from '../config/config.module';

@NgModule({
  declarations: [
    AppComponent,
    RootSecondComponent,
    RootThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ConfigModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
