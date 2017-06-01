import { BookListComponent } from './books/book-list/book-list.component';
import { AboutComponent } from './about/about/about.component';
import { BooksComponent } from './books/books/books.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    children: [{
      path: '',
      component: BookListComponent
    }]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
