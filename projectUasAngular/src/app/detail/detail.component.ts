import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { BookLocation } from '../book-location';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
     <article>
      <img class="listing-gambarSampul" [src]="bookLocation?.gambarSampul"
        alt="Cover gambar of {{bookLocation?.judul}}" />
      <section class="listing-description">
        <h2 class="listing-heading">{{bookLocation?.judul}}</h2>
        <p class="listing-penulis"><strong>Penulis:</strong> {{bookLocation?.penulis}}</p>
        <p><strong>Kategori:</strong> {{bookLocation?.kategori}}</p>
        <p><strong>Tahun Terbit:</strong> {{bookLocation?.tahunTerbit}}</p>
        <p><strong>ISBN:</strong> {{bookLocation?.isbn}}</p>
        <p><strong>Deskripsi:</strong> {{bookLocation?.deskripsi}}</p>
        <p>
          <strong>Tag:</strong> {{bookLocation?.tag?.join(', ') || 'Tidak ada tag'}}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">Fitur Buku</h2>
        <ul>
          <li><strong>Format Digital:</strong> {{bookLocation?.formatDigital ? 'Tersedia' : 'Tidak Tersedia'}}</li>
        </ul>
      </section>
      <section class="listing-actions">
        <h1 class="section-heading">Aksi</h1>
        <button 
          class="primary" 
          [disabled]="!bookLocation?.formatDigital" 
          (click)="readBook()">
          Baca
        </button>
        <button 
          class="secondary" 
          [disabled]="!bookLocation?.formatDigital" 
          (click)="downloadBook()">
          Unduh
        </button>
      </section>
    </article>
  `,
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  bookId = 0;
  bookService: BookService = inject(BookService);
  bookLocation: BookLocation | undefined;

  constructor() {
    this.bookId = Number(this.route.snapshot.params['id']);
    this.bookService.getBookLocationById(this.bookId)
      .then(location => {
        this.bookLocation = location;
      });
  }

  readBook() {
    if (this.bookLocation?.formatDigital) {
      alert(`Membaca buku: ${this.bookLocation.judul}`);
      // Logika untuk membuka URL pembaca buku
    } else {
      alert('Buku ini tidak tersedia dalam format digital.');
    }
  }

  downloadBook() {
    if (this.bookLocation?.formatDigital) {
      alert(`Mengunduh buku: ${this.bookLocation.judul}`);
      // Logika untuk mengunduh file buku digital
    } else {
      alert('Buku ini tidak tersedia untuk diunduh.');
    }
  }
}

