import { PreloadDelayedService } from './shared/preload-delayed.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    HttpModule
  ],
  providers: [PreloadDelayedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
