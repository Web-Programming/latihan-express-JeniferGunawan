import { Injectable } from '@angular/core';
import { BookLocation } from './book-location';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = "http://localhost:3000/buku";

  constructor() { }

  async getAllBookLocations() : Promise<BookLocation[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getBookLocationById(id: Number) : Promise<BookLocation | undefined>{
    const data = await fetch(`${this.url}/${id}`); //http://localhost:3000/buku/1
    return await data.json() ?? {};
  }

  submitApplication(firstName: String, lastName: String, 
    email: String){
      console.log(firstName, lastName, email);
  }
}