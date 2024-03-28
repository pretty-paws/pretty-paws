import { makeAutoObservable, runInAction } from 'mobx';
import { fetchOfferByAnimal } from '../services/heroAPI';

export class HeroStore {
  state = '';
  offerByAnimal = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async getOfferByAnimal(language) {
    this.state = 'pending';
    try {
      const data = await fetchOfferByAnimal(language);
      runInAction(() => {
        this.offerByAnimal = data;

        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
}
