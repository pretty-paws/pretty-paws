import { makeAutoObservable } from 'mobx';

import { AuthStore } from './AuthStore';
import { CategoryStore } from './CategoryStore';
import { AnimalStore } from './AnimalStore';
import { CartStore } from './CartStore';
import { FavouriteStore } from './FavouriteStore';
export class RootStore {
  auth = new AuthStore();
  category = new CategoryStore();
  animal = new AnimalStore();
  cart = new CartStore();
  favourite = new FavouriteStore();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
