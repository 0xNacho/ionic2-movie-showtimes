import { Storage } from '@ionic/storage';
import { Film } from './../model/film';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Rx';

/*
  Generated class for the FavoriteFilms provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FavoriteFilms {

  private films: Film[];

  private notifier: Subject<Film[]> = new Subject<Film[]>();

  constructor(public storage: Storage) {
    this.initialize();
  }


  public initialize() {
    this.storage.ready().then(() => {
      this.storage.get('films').then((storedFilms: Film[]) => {
        if (storedFilms === null) {
          this.films = new Array<Film>();
          this.storage.set('films', this.films);
        }
        else {
          this.films = storedFilms;
        }
        this.notifier.next(this.films);
      });
    });
  }

  public add(film: Film) {
    this.films.push(film);
    this.storage.set('films', this.films);
    this.notifier.next(this.films);
  }


  public remove(film: Film) {
    let index = this.films.indexOf(film);
    if (index > -1) {
      this.films.splice(index, 1);
      this.storage.set('films', this.films);
      this.notifier.next(this.films);
    }
  }


  public get(): Subject<Film[]> {
    return this.notifier;
  }
}
