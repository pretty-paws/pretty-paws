import { makeAutoObservable } from 'mobx';

export class SubscriptionStore {
  state = '';
  subscriptionsIDList = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setSubscriptionIDList(id) {
    const isCategoryChosen = this.subscriptionsIDList.includes(id);
    if (isCategoryChosen) {
      this.subscriptionsIDList = this.subscriptionsIDList.filter(
        item => item !== id
      );
    } else {
      this.subscriptionsIDList = [...this.subscriptionsIDList, id];
    }
  }

  includesSubscription(id) {
    console.log(this.subscriptionsIDList.includes(id));
    return this.subscriptionsIDList.includes(id);
  }
}
