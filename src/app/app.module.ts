import { Network } from '@ionic-native/network';
import { FavoriteFilms } from './../providers/favorite-films';
import { Config } from './../providers/config';
import { ConfigurationPage } from './../pages/configuration/configuration';
import { SearchPage } from './../pages/search/search';
import { Netflix } from './../providers/netflix';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FilmPage } from '../pages/film/film';
import { IonicStorageModule } from '@ionic/storage';
import { FavoritesPage } from './../pages/favorites/favorites';
import { LoginPage } from './../pages/login/login';
import { Vibration } from '@ionic-native/vibration';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    ConfigurationPage,
    FilmPage,
    FavoritesPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    ConfigurationPage,
    FilmPage,
    FavoritesPage,
    LoginPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Netflix, Config, FavoriteFilms, Network,Vibration]
})
export class AppModule { }
