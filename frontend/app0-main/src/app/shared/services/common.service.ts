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
      test1: '',
      test2: '',
    };
    this.actions = initGlobalState(state);
    this.actions.onGlobalStateChange((state: any, prev: any) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log('main', prev, state);
      console.log('main diff', this.diff(prev, state));
    });
  }

  diff(source: any, target: any) {
    let result: any = {};
    for (let k in target) {
      if (target[k] !== source[k]) {
        result[k] = target[k];
      }
    }
    for (let k in source) {
      if (!target[k]) {
        result[k] = target[k];
      }
    }
    return result;
  }

  setGlobalState(state: any) {
    this.actions.setGlobalState(state);
  }
}
