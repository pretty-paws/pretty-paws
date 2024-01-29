import { makeAutoObservable } from 'mobx';

import { AuthStore } from './AuthStore';
import { CategoryStore } from './CategoryStore';
import { AnimalStore } from './AnimalStore';
import { CartStore } from './CartStore';
import { FavouriteStore } from './FavouriteStore';
import { CatalogStore } from './CatalogStore';
import { BlogStore } from './BlogStore';
export class RootStore {
  auth = new AuthStore();
  cart = new CartStore();
  favourite = new FavouriteStore();
  catalog = new CatalogStore();
  blog = new BlogStore();

  animal = new AnimalStore();
  category = new CategoryStore();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
