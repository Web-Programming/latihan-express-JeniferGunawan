import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: "Citra Grand City",
      city: "palembang",
      state: "ID",
      photo: "https://awsimages.detik.net.id/community/media/visual/2023/12/15/perumahan-di-gunung-sindurdok-istimewa_43.jpeg?w=600&q=90",
      availableUnits: 12,
      wifi: true,
      laundry: true
    },
    {
      id: 0,
      name: "Citra Land",
      city: "palembang",
      state: "ID",
      photo: "https://rumahsaya.bca.co.id/media/rumahsaya/Images/Web/ef14278a-5591-ef11-910e-005056aa44b9",
      availableUnits: 10,
      wifi: true,
      laundry: true
    },
  ];
}

