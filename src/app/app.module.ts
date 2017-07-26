import { FormsModule } from '@angular/forms';
import { PushService } from './shared/push.service';
import { PreloadDelayedService } from './shared/preload-delayed.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule, NgServiceWorker, NgPushRegistration } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { PushComponent } from './push/push.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    PushComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    HttpModule,
    ServiceWorkerModule,
    FormsModule
  ],
  providers: [PreloadDelayedService, PushService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(sw: NgServiceWorker, private push: PushService) {

    // listen for updates
    sw.updates.subscribe(event => {
      console.log('-->', event)
      if (event.type === 'pending') {
        if (window.confirm('There is a new version available. Do you want to update?')) {
          sw.activateUpdate(event.version);
        }
      } else {
        location.reload();
      }
    });
  }
}
