import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Notizia } from '../../model/notizia.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  notizie: Array<Notizia>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotiziePage');
    this.notizie = [
      {
        id: 1,
        titolo: 'Notizia 1',
        testo: 'Testo di esempio della Notizia.',
        data: '2018-05-10',
      },
      {
        id: 2,
        titolo: 'Notizia 2',
        testo: 'Testo di esempio della Notizia.',
        data: '2018-05-10',
      },
    ];
  }

  notizia(n: Notizia) {
    this.navCtrl.push('DettaglioNotiziaPage', { notiziaId: n.id });
  }

  //aggiungi notizia per allenatore e capitano
  aggiungiNotizia() {
    this.navCtrl.push('AggiungiNotiziaPage');
  } 

  constructor(public navCtrl: NavController) {}
  
}
