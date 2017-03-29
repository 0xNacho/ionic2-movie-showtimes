import { FavoriteFilms } from './../../providers/favorite-films';
import { Film } from './../../model/film';
import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

/*
  Generated class for the Film page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-film',
  templateUrl: 'film.html'
})
export class FilmPage {

  private film: Film;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public navController: NavController,
    public actionSheetCtrl: ActionSheetController,
    public favoriteFilmsService: FavoriteFilms,
    public toastCtrl: ToastController
  ) {

    this.film = this.navParams.get('film');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmPage');
  }

  enableActionSheet() {
    console.log('enabling action sheet');
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose yor action',
      buttons: [
        {
          text: 'Add to favorites',
          handler: () => {
            let toast = this.toastCtrl.create({
              message: `${this.film.show_title} has been successfuly added`,
              duration: 2000,
              position: 'bottom'
            });
            this.favoriteFilmsService.add(this.film);
            toast.present();
            this.navController.pop();
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();

  }

}
