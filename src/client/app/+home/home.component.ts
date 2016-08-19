import { Component, OnInit } from '@angular/core';
import { IosBetaFormComponent } from './home-ios-beta-form/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId   : module.id,
  selector   : 'pikapika-home',
  templateUrl: 'home.component.html',
  styleUrls  : ['home.component.css'],
  directives : [IosBetaFormComponent]
})

export class HomeComponent implements OnInit {

  ngOnInit(){
    this.animateValue("users", 2345, 3423424, 11000);
    this.animateValue("wild", 234563, 36354643, 50);
    this.animateValue("found", 566334, 34534534, 50);
  }

  public animateValue(id: string, start:any, end:any, duration:any) {
      var range = end - start;
      var current = start;
      var increment = end > start? 1 : -1;
      var obj = document.getElementById(id);
      var timer = setInterval(function() {
          current += increment;
          obj.innerHTML = current;
          if (current == end) {
              clearInterval(timer);
          }
      }, duration);
  }
}
