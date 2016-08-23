import { Component, OnInit } from '@angular/core';

import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component({
  moduleId   : module.id,
  selector   : 'pika-map',
  templateUrl: 'map.component.html',
  styleUrls  : ['map.component.css'],
  directives : [GOOGLE_MAPS_DIRECTIVES]
})
export class MapComponent implements OnInit {
  public lat: number = 51.678418;
  public lng: number = 7.809007;

  constructor() { }

  ngOnInit() { }
}
