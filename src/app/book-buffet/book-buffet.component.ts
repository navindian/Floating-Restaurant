import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-book-buffet',
  templateUrl: './book-buffet.component.html',
  styleUrls: ['./book-buffet.component.css']
})
export class BookBuffetComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  // buffetBookingForm :FormGroup

  constructor(private fb: FormBuilder) {}
    buffetBookingForm = this.fb.group({
    buffetName: ["", Validators.required],
    emailId: ["", Validators.required],
    plateCount: ["", Validators.required],
    bookedOn: ["", Validators.required],
  });

  ngOnInit() {}
  bookBuffet() {
    console.log("I m here");
    this.successMessage = "Booking successfull";
  }

}
