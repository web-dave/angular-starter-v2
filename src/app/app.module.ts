import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AboutModule } from './about/about.module';
import { BooksModule } from './books/books.module';
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
    BooksModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
