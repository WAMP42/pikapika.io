import { Component, OnInit } from '@angular/core';
import { IosBetaFormComponent } from './home-ios-beta-form/index';
import { APIService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'pikapika-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [IosBetaFormComponent]
})

export class HomeComponent implements OnInit {

  public pokemon: number;
  public foundPokemon: number;
  public users: number;

  constructor(private api: APIService) { }

  ngOnInit() {
    this.getInitialData();
  }

  public animateValue(id: string, start: any, end: any, duration: any) {
    var current = start;
    var increment = end > start ? 1 : -1;
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
      current += increment;
      obj.innerHTML = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, duration);
  }

  public getInitialData() {

    this.api
      .getNumberPokemon()
      .subscribe(
        (res: any) => {
          this.pokemon = res.count;
          this.animateValue('wild', this.pokemon, this.pokemon + 100000, 120);
        },
        (err: any) => {
          this.pokemon = 890;
          this.animateValue('wild', this.pokemon, this.pokemon + 100000, 120);
        }
      );

    this.api
      .getNumberTrainer()
      .subscribe(
        (res: any) => {
          this.users = res.count;
          this.animateValue('users', this.users, this.users + 5000 , 6000);
        },
        (err: any) => {
          this.users = 21701;
          this.animateValue('users', this.users, this.users + 5000 , 6000);
        }
      );

    this.api
      .getNumberSpwan()
      .subscribe(
        (res: any) => {
          this.foundPokemon = res.count;
          this.animateValue('found', this.foundPokemon, this.foundPokemon + 5000, 50);
        },
        (err: any) => {
          this.foundPokemon = 186350;
          this.animateValue('found', this.foundPokemon, this.foundPokemon + 5000, 50);
        }
      );
  }
}
