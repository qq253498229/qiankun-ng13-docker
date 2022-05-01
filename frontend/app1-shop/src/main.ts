import './public-path';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { QiankunUtil } from './app/shared/utils/qiankunUtil';

if (environment.production) {
  enableProdMode();
}

let app: void | NgModuleRef<AppModule>;

async function render() {
  app = await platformBrowserDynamic()
    .bootstrapModule(AppModule, {ngZone: (window as any).ngZone})
    .catch((err) => console.error(err));
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props: Object) {
  console.log(props);
}

export async function mount(props: any) {
  let utils = QiankunUtil.getInstance();
  utils.setMicroAppStateActions(
    props.onGlobalStateChange,
    props.setGlobalState,
    props.offGlobalStateChange,
  );
  render();
}

export async function unmount(props: Object) {
  console.log(props);
  // @ts-ignore
  app.destroy();
}
