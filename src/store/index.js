import { makeAutoObservable } from 'mobx';
import { SubscriptionStore } from './SubscriptionStore';

import { AuthStore } from './AuthStore';

export class RootStore {
  auth = new AuthStore();
  subscriptionStore = new SubscriptionStore();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
