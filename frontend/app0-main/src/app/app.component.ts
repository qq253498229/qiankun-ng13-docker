import { Component, OnInit } from '@angular/core';
import { registerMicroApps, runAfterFirstMounted, start } from 'qiankun';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.registerMicroApps();

    // setDefaultMountApp('/shop');

    start();

    runAfterFirstMounted(() => {
      console.log('[MainApp] first app mounted');
    });
  }

  /** 注册子项目 */
  registerMicroApps(): void {
    console.log('11111');
    registerMicroApps(
      [
        {
          name: 'shop',
          entry: '//localhost:4201',
          container: '#subapp-viewport',
          activeRule: '/shop',
        },
      ],
      {
        beforeLoad: [
          app => {
            console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
            return Promise.resolve();
          },
        ],
        beforeMount: [
          app => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
            return Promise.resolve();
          },
        ],
        afterUnmount: [
          app => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
            return Promise.resolve();
          },
        ],
      },
    );
  }
}
