import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/housing";
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  constructor() { }

  // Mendapatkan semua lokasi perumahan
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw new Error('Gagal mendapatkan data lokasi perumahan');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  // Mendapatkan lokasi perumahan berdasarkan ID
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`); // http://localhost:3000/housing/1
      if (!response.ok) {
        throw new Error(`Gagal mendapatkan lokasi perumahan dengan ID ${id}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  // Mengirim aplikasi untuk perumahan
  async submitApplication(firstName: string, lastName: string, email: string): Promise<void> {
    const apiurl = "http://localhost:3000/register";

    try {
      const response = await fetch(apiurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
        }),
      });

      if (!response.ok) {
        throw new Error('Gagal mengirim aplikasi');
      }

      alert('Aplikasi berhasil dikirim');
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat mengirim aplikasi');
    }
  }
}

