import { Component, NgZone, OnInit } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private ngZone: NgZone) {
    (window as any).ngZone = this.ngZone;
  }

  ngOnInit(): void {
    this.initQiankun();
  }

  initQiankun() {
    registerMicroApps([{
      name: 'shopApp', // app name registered
      entry: '//localhost:4201',
      container: '#subApp',
      activeRule: '/shop',
    }]);

    start();
  }
}
