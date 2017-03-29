import { Film } from './../../model/film';
import { FavoriteFilms } from './../../providers/favorite-films';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilmPage } from '../film/film';

/*
  Generated class for the Favorites page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  private favFilms: Film[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public favService: FavoriteFilms) {
    this.favService.get().subscribe((films: Film[]) => this.favFilms = films);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
    this.favService.initialize();
  }

  public goToFilm(film: Film) {
    this.navCtrl.push(FilmPage, { 'film': film });
  }

  public deleteFavorite(film: Film) {
    this.favService.remove(film);
  }


}
