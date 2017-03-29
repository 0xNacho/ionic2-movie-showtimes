import { Config } from './../../providers/config';
import { Film } from './../../model/film';
import { Netflix } from './../../providers/netflix';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, Searchbar } from 'ionic-angular';
import { FilmPage } from '../film/film';
import { Network } from '@ionic-native/network';
import { Vibration } from '@ionic-native/vibration';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  @ViewChild('searchField')
  private searchField : Searchbar;
  private films: Film[];
  private loading: Loading;
  private searchPlaceholder = '';
  private searchBy = '';

  constructor(
    public network: Network,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingController: LoadingController,
    public netflix: Netflix,
    public vibration: Vibration,
    public configService: Config) {
    this.configService.get().subscribe((config: any) => { this.searchBy = config.searchBy; this.searchPlaceholder = `Searching by ${this.searchBy}` });
  }

  public goToFilm(film: Film) {
    this.navCtrl.push(FilmPage, { 'film': film });
  }

  onInput(field: string) {
    this.presentLoading();
    switch (this.searchBy) {
      case 'title':
        this.netflix.getByTitle(field).subscribe(
          (film: Film[]) => this.handleRequest(film),
          (film: Film[]) => this.handleRequest(film)
        );
        break;
      case 'director':
        this.netflix.getByDirector(field).subscribe(
          (film: Film[]) => this.handleRequest(film),
          (film: Film[]) => this.handleRequest(film)
        );
        break;
      case 'actor':
        this.netflix.getByActor(field).subscribe(
          (film: Film[]) => this.handleRequest(film),
          (film: Film[]) => this.handleRequest(film)
        );
        break;
    }
  }

  private presentLoading() {
    this.loading = this.loadingController.create({
      content: 'Por favor, espere...'
    });
    this.loading.present();

  }
  private handleRequest(films: Film[]) {
    this.films = films;
    this.loading.dismiss();
    this.searchField.setFocus();
    this.vibration.vibrate(300);
  }

  onCancel(field: string) {
    console.log('oncancel', field);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.configService.initialize();
    this.searchField.setFocus();

  }

}
