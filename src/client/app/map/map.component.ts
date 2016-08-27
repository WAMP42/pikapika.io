import { Component, OnInit } from '@angular/core';

import { GoogleMapsAPIWrapper, LatLngLiteral } from 'angular2-google-maps/core/index';
import { APIService } from '../shared/index';

@Component({
  moduleId   : module.id,
  selector   : 'pika-map',
  templateUrl: 'map.component.html',
  styleUrls  : ['map.component.css'],
})
export class MapComponent implements OnInit  {

  public zoom: number = 18;
  public pokemons: any;
  public latlng: LatLngLiteral = {
    lat: 0,
    lng: 0
  };
  public bounds: any;

  constructor(private api: APIService, private mapAPIWrapper: GoogleMapsAPIWrapper) { }

  ngOnInit() {
    this.getCurrentLocation();
    this.getPokemon();
  }

  public mapClicked($event: MouseEvent) {
    console.log($event);
  }

  public createMap() {
    let map = document.getElementById('map');
    let mapOptions = {
      center: this.latlng,
      zoom: this.zoom
    };
    this.mapAPIWrapper.createMap(map, mapOptions)
        .then((response) => {
          setTimeout(() => {
            this.mapAPIWrapper.getBounds()
                .then((response)=> {
                  this.bounds = response;
                });
          } , 500);
        });

  }

  private getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (succes) => {
          let cords = succes.coords;
          this.latlng.lat = cords.latitude;
          this.latlng.lng = cords.longitude;
          this.createMap();
        },
        (err) => {
          alert('Ups! Something Went Wrong With You Location');
        }
      );
    };
  }

  private getPokemon() {
    this.api
      .getAllPokemon()
      .subscribe(
      (response: any) => {
        this.pokemons = response;
      },
      (error: any) => {
        alert('Something its wrong with our servers');
      }
      );
  }
}
