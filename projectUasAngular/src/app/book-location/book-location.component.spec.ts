import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLocationComponent } from './book-location.component';

describe('BookLocationComponent', () => {
  let component: BookLocationComponent;
  let fixture: ComponentFixture<BookLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});