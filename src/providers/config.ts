import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';


/*
  Generated class for the Config provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Config {

  private configProperties: any;

  private notifier: Subject<any> = new Subject<any>();

  constructor(public storage: Storage) {
    this.initialize();
  }


  public initialize() {
    this.storage.ready().then(() => {
      this.storage.get('config').then((storedConfig: any) => {
        if (storedConfig === null) {
          this.configProperties = {searchBy:'title', sortBy:'show_title'};
          this.storage.set('config', this.configProperties);
        }
        else {
          this.configProperties = storedConfig;
        }
        this.notifier.next(this.configProperties);
      });
    });
  }

  public set(config : any) {
    this.configProperties = config;
    this.storage.set('config', this.configProperties);
    this.notifier.next(this.configProperties);
  }


  public get(): Subject<any> {
    return this.notifier;
  }
}
