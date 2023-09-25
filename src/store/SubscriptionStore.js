import { makeAutoObservable } from 'mobx';

export class SubscriptionStore {
  email = '';
  animalCategory = [];
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
