import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookLocation } from '../book-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-book-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-gambarSampul" [src]="baseUrl + bookLocation.gambarSampul" alt="Exterior gambarSampul of {{ bookLocation.judul }}">
      <h2 class="listing-heading">{{ bookLocation.judul }}</h2>
      <p class="listing-location">{{ bookLocation.penulis }}, {{ bookLocation.tahunTerbit }}</p>
      <a [routerLink]="['details', bookLocation.id]">Show More</a>
    </section>
  `,
  styleUrls: ['./book-location.component.css'] // Corrected from "styleUrl" to "styleUrls"
})
export class BookLocationComponent {
  @Input() bookLocation!: BookLocation;
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
}
