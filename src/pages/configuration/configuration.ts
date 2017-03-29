import { Config } from './../../providers/config';
import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

/*
  Generated class for the Configuration page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html'
})
export class ConfigurationPage {

  private config: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public configService: Config,
    public actionSheetCtrl: ActionSheetController) {
    this.configService.get().subscribe((config: any) => this.config = config);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationPage');
    this.configService.initialize();
  }
  public change() {
    this.configService.set(this.config);
  }


}
