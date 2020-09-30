import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBookingsComponent } from './view-bookings/view-bookings.component';
import { BookBuffetComponent } from './book-buffet/book-buffet.component';

const routes: Routes = [
  {path : 'bookBuffet' , component : BookBuffetComponent },
  {path : 'viewBookings' , component : ViewBookingsComponent},
  {path : '' , redirectTo : '/bookBuffet' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
