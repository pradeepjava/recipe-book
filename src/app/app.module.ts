import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRouterModule } from './app.router.module';
import { HttpClientModule } from '@angular/common/http'
import { AlertComponent } from './shared/alert/alert.component';
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],
 
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
