import { Component, OnInit } from '@angular/core';
import { registerMicroApps, runAfterFirstMounted, start } from 'qiankun';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  menu = [
    {label: '商品列表', router: '/shop', icon: 'shopping'},
    {label: '用户管理', router: '/user', icon: 'user'},
    {
      label: '登录', right: true, icon: 'login', sub: [
        {label: '我的订单'},
        {label: '我的收藏'},
      ],
    },
  ];

  ngOnInit(): void {
    this.registerMicroApps();

    // setDefaultMountApp('/app1');

    start();

    runAfterFirstMounted(() => {
      console.log('[MainApp] first app mounted');
    });
  }

  /** 注册子项目 */
  registerMicroApps(): void {
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
