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
  }
}
