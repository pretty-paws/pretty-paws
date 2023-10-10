import { makeAutoObservable } from 'mobx';
import { SubscriptionStore } from './SubscriptionStore';

import { AuthStore } from './AuthStore';
import { CategoryStore } from './CategoryStore';
import { AnimalStore } from './AnimalStore';
export class RootStore {
  auth = new AuthStore();
  subscriptionStore = new SubscriptionStore();
  category = new CategoryStore();
  animal = new AnimalStore();
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
