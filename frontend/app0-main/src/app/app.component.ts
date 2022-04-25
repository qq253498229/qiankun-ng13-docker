import { Component, OnInit } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.initQiankun();
  }

  initQiankun() {
    registerMicroApps([
      {
        name: 'shop app', // app name registered
        entry: '//localhost:4201',
        container: '#subApp',
        activeRule: '/shop',
      },
    ]);

    start();
  }
}
