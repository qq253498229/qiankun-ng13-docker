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
      const diff = this.compare(prev, state);
      if (Object.keys(diff).length !== 0) {
        // state: 变更后的状态; prev 变更前的状态
        console.log('main', prev, state);
        console.log('main diff', diff);
      }
    });
  }

  compare(source: any, target: any) {
    let result: any = {};
    for (let k in target) {
      if (typeof source[k] === 'string' && target[k] !== source[k]) {
        result[k] = target[k];
      } else if (typeof source[k] === 'object' && JSON.stringify(target[k]) !== JSON.stringify(source[k])) {
        result[k] = target[k];
      }
    }
    for (let k in source) {
      if (undefined === target[k]) {
        result[k] = target[k];
      }
    }
    return result;
  };

  setGlobalState(state: any) {
    this.actions.setGlobalState(state);
  }
}
