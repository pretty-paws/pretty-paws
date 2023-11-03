import { makeAutoObservable } from 'mobx';

import { AuthStore } from './AuthStore';
import { CategoryStore } from './CategoryStore';
import { AnimalStore } from './AnimalStore';
import { CartStore } from './CartStore';
import { FavouriteStore } from './FavouriteStore';
import { CatalogStore } from './CatalogStore';
export class RootStore {
  auth = new AuthStore();
  category = new CategoryStore();
  animal = new AnimalStore();
  cart = new CartStore();
  favourite = new FavouriteStore();
  catalog = new CatalogStore();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
