import { makeAutoObservable } from 'mobx';

import { AuthStore } from './AuthStore';

class RootStore {
  auth = new AuthStore();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default new RootStore();
