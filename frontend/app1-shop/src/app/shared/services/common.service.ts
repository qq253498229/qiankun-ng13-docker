import { Injectable } from '@angular/core';
import { QiankunUtil } from '../utils/qiankunUtil';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public onGlobalStateChange: any;
  public setGlobalState: any;
  public offGlobalStateChange: any;

  constructor() {
    this.initQiankunStates();
  }

  initQiankunStates() {
    let util = QiankunUtil.getInstance();
    this.onGlobalStateChange = util.onGlobalStateChange;
    this.setGlobalState = util.setGlobalState;
    this.offGlobalStateChange = util.offGlobalStateChange;
    this.onGlobalStateChange((state: any, prev: any) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log('shop', prev, state);
    });
  }
}
