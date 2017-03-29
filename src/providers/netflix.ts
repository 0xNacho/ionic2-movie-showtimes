import { Observable } from 'rxjs/Observable';
import { Film } from './../model/film';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Netflix provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Netflix {

  private base = 'http://netflixroulette.net/api/api.php?';

  constructor(public http: Http) {
  }

  getByTitle(title: string): Observable<Film[]> {
    return this.http
      .get(`${this.base}title=${title}`)
      .map((response: Response) => this.parseSingleEntity(response))
      .catch((response: Response) => this.error(response));
  }

  getByDirector(director: string): Observable<Film[]> {
    return this.http
      .get(`${this.base}director=${director}`)
      .map((response: Response) => this.parseEntities(response))
      .map((r: any) => <Film>r)
      .catch((response: Response) => this.error(response));
  }

  getByActor(actor: string): Observable<Film[]> {
    return this.http
      .get(`${this.base}actor=${actor}`)
      .map((response: Response) => this.parseEntities(response))
      .map((r: any) => <Film>r)
      .catch((response: Response) => this.error(response));
  }

  private parseEntities(r: Response): Film[] {
    let data = r.json();
    return data;
  }

  private parseSingleEntity(r: Response): Film[] {
    let data = r.json();
    return [<Film>data];
  }

  private error(response: Response) {
    return Observable.of(null);
  }


}
