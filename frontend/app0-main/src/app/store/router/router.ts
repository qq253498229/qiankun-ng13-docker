import { Selector } from '@ngxs/store';
import { RouterState, RouterStateModel as RouterStateOuterModel } from '@ngxs/router-plugin';
import { Params } from '@angular/router';

export interface RouterStateModel {
  url: string;
  params: Params;
  queryParams: Params;
  data: any;
}

export class RouterSelectors {
  @Selector([RouterState])
  static data({state}: RouterStateOuterModel<RouterStateModel>) {
    return state?.data;
  }

  @Selector([RouterState])
  static params({state}: RouterStateOuterModel<RouterStateModel>) {
    return state?.params;
  }

  @Selector([RouterState])
  static queryParams({state}: RouterStateOuterModel<RouterStateModel>) {
    return state?.queryParams;
  }

  @Selector([RouterState])
  static url({state}: RouterStateOuterModel<RouterStateModel>) {
    return state?.url;
  }
}
