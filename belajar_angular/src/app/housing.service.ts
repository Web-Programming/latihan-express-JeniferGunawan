import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/housing";

  constructor() { }

  // Mendapatkan semua lokasi perumahan
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  // Mendapatkan lokasi perumahan berdasarkan ID
  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`); // http://localhost:3000/housing/1
    return await data.json() ?? {};
  }

  // Mengirim aplikasi untuk perumahan
  async submitApplication(firstName: String, lastName: String, email: String): Promise<any> {
    const apiurl = "http://localhost:3000/register";;

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
        const error = await response.json();
        throw new Error(error.message || 'Gagal mengirim aplikasi');
      }

      const result = await response.json();
      console.log('Application submitted successfully:', result);
    
      return result;
    } catch (error: any) {
      console.error('Error during application submission:', error);
      
      throw error;
    }
  }
}

