import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { CountPipe } from './view-bookings/count.pipe';
import { BookBuffetComponent } from './book-buffet/book-buffet.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBookingsComponent,
    CountPipe,
    BookBuffetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
