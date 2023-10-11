import { makeAutoObservable } from 'mobx';
// import { ProfileStore } from './ProfileStore';

import { AuthStore } from './AuthStore';
import { CategoryStore } from './CategoryStore';
import { AnimalStore } from './AnimalStore';
export class RootStore {
  auth = new AuthStore();
  // subscriptionStore = new SubscriptionStore();
  category = new CategoryStore();
  animal = new AnimalStore();

  // profile = new ProfileStore();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
