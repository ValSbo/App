import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FotoPage } from '../pages/Foto/Foto';
import { ProfiloPage } from '../pages/profilo/profilo';
import { VideoPage } from '../pages/video/video';
import { CalendarioPage } from '../pages/calendario/calendario';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, icon: string }>;

  utente = {
    nome: 'Alessandro',
    cognome: 'Marozzi'
  };

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profilo', component: ProfiloPage, icon: 'person' },
      { title: 'Calendario', component: CalendarioPage, icon: 'calendar' },
      { title: 'Foto', component: FotoPage, icon: 'images' },
      { title: 'Video', component: VideoPage, icon: 'videocam' }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
