import { makeAutoObservable, runInAction } from 'mobx';
import { toggleFav } from '../services/productsAPI';

export class FavouriteStore {
  state = '';
  favourite = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getFavourite(items) {
    this.favourite = items;
  }

  //   checkFavourite(id) {
  //     console.log(id);
  //     console.log(this.favourite.some(product => product.id === id));
  //     return this.favourite?.some(product => product.id === id);
  //   }

  async toggleFavourite(id) {
    this.state = 'pending';
    try {
      await toggleFav(id);
      runInAction(() => {
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
}
