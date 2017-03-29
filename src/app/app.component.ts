import { LoginPage } from './../pages/login/login';
import { ConfigurationPage } from './../pages/configuration/configuration';
import { FavoritesPage } from './../pages/favorites/favorites';

import { SearchPage } from './../pages/search/search';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any, icon: string }>;


  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Search', component: SearchPage, icon: 'search' },
      { title: 'Favorites', component: FavoritesPage, icon:'star'  },
      { title: 'Configuration', component: ConfigurationPage, icon: 'hammer' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
