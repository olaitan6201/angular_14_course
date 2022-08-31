import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { CartsComponent } from './carts/carts.component';

@NgModule({
  declarations: [
    AppComponent,
    CartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
