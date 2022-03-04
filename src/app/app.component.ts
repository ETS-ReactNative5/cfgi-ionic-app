import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {
  todos: Array<any>;
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
  ) {this.initializeApp()}

  initializeApp() {};
}