import { Component, NgZone, OnInit } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';
import { environment } from '../environments/environment';
import { CommonService } from './shared/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private ngZone: NgZone,
    private service: CommonService,
  ) {
    (window as any).ngZone = this.ngZone;
  }

  ngOnInit(): void {
    this.initQiankun();
    this.service.initState();
  }

  initQiankun() {
    const container = '#subApp';
    registerMicroApps([{
      name: 'shopApp', // app name registered
      entry: `${environment.production ? '/child-shop/' : '//localhost:4201/'}`,
      activeRule: '/shop',
      container,
    }]);

    start();
  }

  test1() {
    this.service.setGlobalState({test: '456'});
  }
}
