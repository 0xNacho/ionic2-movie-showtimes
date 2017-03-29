import { SearchPage } from './../search/search';
import { Component } from '@angular/core';
import { NavController, AlertController, MenuController } from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private user: string = '';
  private password: string = '';

  constructor(private nav: NavController, private alertCtrl: AlertController, private m: MenuController) {
    this.m.swipeEnable(false);
   }


  public login() {
    if (this.user === 'admin' && this.password === 'admin') {
      this.nav.setRoot(SearchPage);
    }
    else {
      this.showError('Incorrect login. Try again');
    }
  }

  showError(text) {
    let alert = this.alertCtrl.create({
      title: 'Failed attemp',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);

    this.user = '';
    this.password = '';
  }
}
