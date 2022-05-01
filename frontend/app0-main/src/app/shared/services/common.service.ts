import { Injectable } from '@angular/core';
import { initGlobalState } from 'qiankun';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  actions: any;

  constructor() {
  }

  initState() {
    const state = {
      test: '',
    };
    this.actions = initGlobalState(state);
    this.actions.onGlobalStateChange((state: Record<string, any>, prev: Record<string, any>) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log('main', prev, state);
    });
  }

  setGlobalState(state: any) {
    this.actions.setGlobalState(state);
  }
}
