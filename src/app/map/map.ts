import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';

interface MarkerData {
  id: number;
  name: string;
  lat: number;
  lng: number;
  description: string;
}

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrls: ['./map.css'],
})
export class MapComponent implements AfterViewInit {
  private map: L.Map | undefined;
  selectedInfo: MarkerData | null = null;

  markerData: MarkerData[] = [
    {
      id: 1,
      name: 'Lagos',
      lat: 6.5244,
      lng: 3.3792,
      description: 'Largest city in Nigeria and a major financial hub.',
    },
    {
      id: 2,
      name: 'Abuja',
      lat: 9.0765,
      lng: 7.3986,
      description: 'Capital city of Nigeria, known for its architecture.',
    },
    {
      id: 3,
      name: 'Kano',
      lat: 12.0022,
      lng: 8.5919,
      description: 'Historical trade city in northern Nigeria.',
    },
    {
      id: 4,
      name: 'Ibadan',
      lat: 7.3775,
      lng: 3.947,
      description: 'Home to Nigeria’s oldest university.',
    },
    {
      id: 5,
      name: 'Port Harcourt',
      lat: 4.8156,
      lng: 7.0498,
      description: 'Oil industry hub in the Niger Delta.',
    },
    {
      id: 6,
      name: 'Benin City',
      lat: 6.3382,
      lng: 5.6258,
      description: 'Cultural center of the Edo people.',
    },
    {
      id: 7,
      name: 'Enugu',
      lat: 6.4493,
      lng: 7.5139,
      description: 'Coal mining city in southeastern Nigeria.',
    },
    {
      id: 8,
      name: 'Jos',
      lat: 9.8965,
      lng: 8.8583,
      description: 'Known for its cool climate and rock formations.',
    },
    {
      id: 9,
      name: 'Ilorin',
      lat: 8.4966,
      lng: 4.5421,
      description: 'Capital of Kwara State, a mix of cultures.',
    },
    {
      id: 10,
      name: 'Abeokuta',
      lat: 7.1604,
      lng: 3.3481,
      description: 'Known for Olumo Rock and historical sites.',
    },
    {
      id: 11,
      name: 'Calabar',
      lat: 4.958,
      lng: 8.3269,
      description: 'Tourism hub with vibrant carnivals.',
    },
    {
      id: 12,
      name: 'Makurdi',
      lat: 7.7306,
      lng: 8.5361,
      description: 'Capital of Benue State, by the Benue River.',
    },
    {
      id: 13,
      name: 'Maiduguri',
      lat: 11.8311,
      lng: 13.15,
      description: 'Major city in northeastern Nigeria.',
    },
    {
      id: 14,
      name: 'Yola',
      lat: 9.2035,
      lng: 12.4954,
      description: 'Capital of Adamawa State with scenic landscapes.',
    },
    {
      id: 15,
      name: 'Owerri',
      lat: 5.485,
      lng: 7.0355,
      description: 'Known for hospitality and local arts.',
    },
    {
      id: 16,
      name: 'Akure',
      lat: 7.2508,
      lng: 5.2103,
      description: 'Capital of Ondo State, rich in cocoa.',
    },
    {
      id: 17,
      name: 'Uyo',
      lat: 5.0409,
      lng: 7.9178,
      description: 'Modern city and capital of Akwa Ibom State.',
    },
    {
      id: 18,
      name: 'Asaba',
      lat: 6.2009,
      lng: 6.7333,
      description: 'River Niger bridgehead, capital of Delta State.',
    },
    {
      id: 19,
      name: 'Sokoto',
      lat: 13.0059,
      lng: 5.2476,
      description: 'Caliphate city with Islamic heritage.',
    },
    {
      id: 20,
      name: 'Warri',
      lat: 5.5174,
      lng: 5.7504,
      description: 'Oil-rich city with vibrant culture.',
    },
  ];

  ngAfterViewInit(): void {
    this.initMap();
    this.loadMarkers();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [9.082, 8.6753], // Center of Nigeria
      zoom: 6,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);
  }

  private loadMarkers(): void {
    this.markerData.forEach((marker) => {
      const leafletMarker = L.marker([marker.lat, marker.lng])
        .addTo(this.map!)
        .on('click', () => {
          this.selectedInfo = marker;
          leafletMarker.bindPopup(marker.name).openPopup();
        });
    });
  }
}
