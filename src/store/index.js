import { makeAutoObservable } from 'mobx';
// import { ProfileStore } from './ProfileStore';

import { AuthStore } from './AuthStore';

export class RootStore {
  auth = new AuthStore();
  // profile = new ProfileStore();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
