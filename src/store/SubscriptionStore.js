import { makeAutoObservable, runInAction } from 'mobx';
import { subscribe, unsubscribe } from '../services/authAPI';
import { AuthStore } from './AuthStore';

export class SubscriptionStore {
  state = '';
  subscriptionsIDList = [];
  error = '';
  errorType = '';
  subscriptions = [];

  authStore = new AuthStore();

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
    return this.subscriptionsIDList.includes(id);
  }

  setSubscription(id) {
    const isCategoryChosen = this.subscriptions.includes(id);
    if (isCategoryChosen) {
      const newChosenCategory = this.subscriptions.filter(item => item !== id);
      this.subscriptions = newChosenCategory;
    } else {
      this.subscriptions = [...this.subscriptions, id];
    }
  }

  setEmptySubscriptions() {
    this.subscriptions = [];
    this.subscriptionsIDList = [];
  }

  async subscribe(data) {
    this.state = 'pending';
    try {
      await subscribe(data);
      // console.log(res.data);

      runInAction(() => {
        this.state = 'done';
        // this.authStore.authorised === true && this.authStore.refresh();
      });
    } catch (error) {
      runInAction(() => {
        console.log('error', error);
        this.state = 'error';
        const errorData = error.response.data.error;

        if (errorData === undefined) return;

        if ('email' in errorData) {
          this.errorType = 'email';
          this.error = errorData.email[0];
        }
        if ('animal_id' in errorData) {
          this.errorType = 'animal_id';
          this.error = errorData.animal_id[0];
        }

        if ('animal_id' in errorData && 'email' in errorData) {
          this.errorType = 'both';
          this.error = 'Оберіть категорію і введіть Вашу пошту';
        }
      });
    }
  }

  async unSubscribe(data) {
    this.state = 'pending';
    try {
      // console.log(data);
      await unsubscribe(data);

      runInAction(() => {
        this.state = 'done';
        // this.authStore.authorised === true && this.authStore.refresh();
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
}
