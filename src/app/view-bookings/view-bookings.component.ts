import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, @Inject(DOCUMENT) private document: Document) { }

  errorMessage = null;


  viewBookingsArray = [
    {
      'emailId': 'krishna@gmail.com',
      'bookings': [
        {
          'bookingId': 2001,
          'buffetName': 'south Indian special',
          'plateCount': 5,
          'bookingDate': '2020-10-10'
        },
        {
          'bookingId': 2002,
          'buffetName': 'south Indian special',
          'plateCount': 3,
          'bookingDate': '2020-10-10'
        },
        {
          'bookingId': 2003,
          'buffetName': 'south Indian special',
          'plateCount': 7,
          'bookingDate': '2020-10-10'
        }]
    },
    {
      'emailId': 'infy@gmail.com',
      'bookings': [
        {
          'bookingId': 2005,
          'buffetName': 'south Indian special',
          'plateCount': 1,
          'bookingDate': '2020-10-10'
        },
        {
          'bookingId': 2006,
          'buffetName': 'south Indian special',
          'plateCount': 5,
          'bookingDate': '2020-10-10'
        },
      ]
    }
  ]


  viewBookingForm: FormGroup;
  bookingDetails = null;

  ngOnInit() {
    this.viewBookingForm = this.fb.group({
      emailId: ["", [Validators.required]],
    })
  }

  onSearchChange() {
    this.bookingDetails = null;
    this.errorMessage = null;
    console.log("email", this.viewBookingForm.value.emailId)
    for (let i in this.viewBookingsArray) {
      let booking = this.viewBookingsArray[i];
      if (booking.emailId == this.viewBookingForm.value.emailId) {
        this.bookingDetails = booking;
      }
    }
    if (this.bookingDetails == null) {
      console.log("not found")
      this.errorMessage = "Reservation for " + this.viewBookingForm.value.emailId + " is not found!"
    }
    else if (this.bookingDetails != null) {
      console.log("found")
    }
  }

  close() {
    this.document.location.reload();
  }


}
