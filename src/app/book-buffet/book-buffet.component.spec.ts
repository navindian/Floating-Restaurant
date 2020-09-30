import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBuffetComponent } from './book-buffet.component';

describe('BookBuffetComponent', () => {
  let component: BookBuffetComponent;
  let fixture: ComponentFixture<BookBuffetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookBuffetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBuffetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
