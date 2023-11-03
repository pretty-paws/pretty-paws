import { makeAutoObservable, runInAction } from 'mobx';
import { fetchAnimals, fetchCategories } from '../services/categoriesAPI';

export class CatalogStore {
  state = '';
  animals = [];
  categories = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  async getAnimals(language) {
    this.state = 'pending';
    try {
      const { data } = await fetchAnimals(language);
      runInAction(() => {
        this.animals = data;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async getCategories(category) {
    this.state = 'pending';
    try {
      const { data } = await fetchCategories(category);
      runInAction(() => {
        this.categories = data;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
}
