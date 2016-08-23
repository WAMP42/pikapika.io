import { Component } from '@angular/core';
import { APIService } from '../../shared/index';

@Component({
  moduleId   : module.id,
  selector   : 'home-ios-beta-form',
  templateUrl: 'ios-beta-form.component.html',
  styleUrls  : ['ios-beta-form.component.css']
})
export class IosBetaFormComponent {

  public newemail: string = '';

  constructor(private api: APIService) {  }

  public join() {
    this.api.joinTheBta(this.newemail)
            .subscribe(
              res => {
                this.newemail = '';
                alert('You will be notifed when the IOS beta is ready stay in touch');
              },
              err => {
                this.newemail = '';
                alert('Something went wrong, try again latter');
              }
            );
  }
}
