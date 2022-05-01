export class Token {
  id?: number;
  accessToken?: string;
  refreshToken?: string;
}

export namespace Token {
  const key = 'token';

  export class Get {
    static readonly type = `获取${key}`;
  }

  export class Add {
    static readonly type = `添加${key}`;

    constructor(public payload: Token) {
    }
  }

  export class Remove {
    static readonly type = `移除${key}`;

    constructor() {
    }
  }

  export class Update {
    static readonly type = `修改${key}`;

    constructor(public payload: Token) {
    }
  }

}
