import { makeAutoObservable, runInAction } from 'mobx';
import {
  fetchAnimals,
  fetchCategories,
  fetchFilters,
  fetchProducts,
} from '../services/categoriesAPI';

export class CatalogStore {
  state = '';
  animals = [];
  categories = [];
  products = [];
  filters = [];
  animalName = '';
  categoryName = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setAnimalName(name) {
    this.animalName = name;
    localStorage.setItem('animalName', name);
  }

  setCategoryName(name) {
    this.categoryName = name;
    localStorage.setItem('categoryName', name);
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

  async getFilters(category, language) {
    this.state = 'pending';
    try {
      const { data } = await fetchFilters(category, language);
      runInAction(() => {
        this.filters = data;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async getProducts(id, language) {
    this.state = 'pending';
    try {
      const { data } = await fetchProducts(id, language);
      runInAction(() => {
        this.products = data;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
}
