import { Component, OnInit } from '@angular/core';

import { APIService } from '../shared/index';

@Component({
  moduleId   : module.id,
  selector   : 'pika-map',
  templateUrl: 'map.component.html',
  styleUrls  : ['map.component.css'],
})
export class MapComponent implements OnInit {

  public lat: number;
  public lng: number;
  public zoom: number = 18;

  constructor(private api: APIService) { }

  ngOnInit() {
    this.getCurrentLocation();
    this.getPokemon();
  }

  private getCurrentLocation() {
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

  private getPokemon() {
    this.api
        .getNerbyPokemon()
        .subscribe(
          (response: any) => {
            console.log(response);
          },
          (error: any) => {
            alert('Something its wrong with our servers');
          }
        );
  }
}
