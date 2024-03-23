import { makeAutoObservable, runInAction } from 'mobx';
import { fetchProductByID, toggleFav } from '../services/productsAPI';

export class FavouriteStore {
  favState = 'done';
  favourite = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  resetFavouriteProducts() {
    this.favourite = [];
  }

  async toggleFavourite(id) {
    this.favState = 'pending';
    try {
      await toggleFav(id);
      runInAction(() => {
        this.favState = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.favState = 'error';
      });
    }
  }

  async getFavProductByID(id, lang) {
    this.favState = 'pending';
    this.favourite = [];
    try {
      const { data } = await fetchProductByID(id, lang);
      runInAction(() => {
        this.favourite.push(data);
        this.favState = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.favState = 'error';
      });
    }
  }
}
