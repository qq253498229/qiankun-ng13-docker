import { Component, NgZone, OnInit } from '@angular/core';
import { initGlobalState, registerMicroApps, start } from 'qiankun';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private ngZone: NgZone) {
    (window as any).ngZone = this.ngZone;
  }

  actions: any;

  ngOnInit(): void {
    this.initQiankun();

    this.initState();
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

  initState() {
    const state = {
      test: '',
    };
    this.actions = initGlobalState(state);
    this.actions.onGlobalStateChange((state: Record<string, any>, prev: Record<string, any>) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log(prev, state);
    });
  }
}
