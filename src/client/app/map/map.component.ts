import { Component } from '@angular/core';

@Component({
  moduleId   : module.id,
  selector   : 'pika-map',
  templateUrl: 'map.component.html',
  styleUrls  : ['map.component.css'],
})
export class MapComponent {
  public lat: number = 51.678418;
  public lng: number = 7.809007;

}
