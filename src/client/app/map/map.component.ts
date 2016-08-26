import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pika-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
})
export class MapComponent implements OnInit {

  public lat: number;
  public lng: number;

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (succes) => {
          let cords = succes.coords;
          this.lat = cords.latitude;
          this.lng = cords.longitude;
        },
        (err) => {
          alert('Ups! Something Went Wrong With You Location');
        }
      );
    };
  }
}
