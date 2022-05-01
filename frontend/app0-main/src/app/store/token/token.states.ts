import { Action, State, StateContext } from '@ngxs/store';
import { Token } from './token.actions';
import { Injectable } from '@angular/core';

export interface TokenModel {
  token: Token;
}

@State<TokenModel>({
  name: 'token',
  defaults: {
    token: {},
  },
})
@Injectable({
  providedIn: 'root',
})
export class TokenState {

  constructor() {
  }

  @Action(Token.Get)
  get({ getState, patchState }: StateContext<TokenModel>) {
    let token = getState().token;
    if (!!token) {
      return;
    }
    patchState({
      token: {
        accessToken: '111',
        refreshToken: '222',
      },
    });
  }

  @Action(Token.Add)
  add({ setState, getState }: StateContext<TokenModel>, { payload }: Token.Add) {
    if (!payload.id) {
      payload.id = new Date().getTime();
    }
    setState({
      token: payload,
    });
  }

  @Action(Token.Remove)
  remove({ setState }: StateContext<TokenModel>) {
    setState({
      token: {},
    });
  }

  @Action(Token.Update)
  update({ setState, getState }: StateContext<TokenModel>, { payload }: Token.Update) {
    setState({
      token: payload,
    });
  }
}
