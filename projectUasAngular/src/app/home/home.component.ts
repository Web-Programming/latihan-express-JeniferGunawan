import { Component, inject } from '@angular/core';
import { BookLocationComponent } from '../book-location/book-location.component';
import { CommonModule } from '@angular/common';
import { BookLocation } from '../book-location';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BookLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  bookLocationList: BookLocation[] = [];
  bookService: BookService = inject(BookService);
  
  constructor() {
    this.bookService.getAllBookLocations()
      .then((listData: BookLocation[]) => {
        this.bookLocationList = listData;
      });
  }
}
