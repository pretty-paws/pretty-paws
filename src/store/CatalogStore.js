import { makeAutoObservable, runInAction } from 'mobx';
import {
  fetchAnimals,
  fetchCategories,
  fetchFilters,
  fetchProducts,
  fetchSubcategories,
  fetchFilterSubcategories,
} from '../services/categoriesAPI';
import {
  fetchFilteredProducts,
  fetchProductByID,
  fetchSaleNewProducts,
} from '../services/productsAPI';

export class CatalogStore {
  state = '';
  filterState = '';
  animals = [];
  categories = [];
  subcategories = JSON.parse(localStorage.getItem('subcategories')) || [];
  filteredSubcategories =
    JSON.parse(localStorage.getItem('filteredSubcategories')) || [];
  products = [];
  saleProducts = [];
  newProducts = [];
  productById = {};
  filters = {};
  animalName = localStorage.getItem('animalName') || '';
  animalSlug = localStorage.getItem('animalSlug') || '';
  categoryName = localStorage.getItem('categoryName') || '';
  categoryID = localStorage.getItem('categoryID') || '';
  categorySlug = localStorage.getItem('categorySlug') || '';
  subcategoryID = localStorage.getItem('subcategoryID') || '';
  subcategorySlug = localStorage.getItem('subcategorySlug') || '';
  productId = '';

  searchQuery = localStorage.getItem('searchQuery') || '';

  filteredProducts = [];
  resetedFilter = false || localStorage.getItem('resetFilter');

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setSearchQuery(query) {
    this.searchQuery = query;
    localStorage.setItem('searchQuery', query);
  }

  setAnimalName(name) {
    this.animalName = name;
    localStorage.setItem('animalName', name);
  }

  setAnimalSlug(slug) {
    this.animalSlug = slug;
    localStorage.setItem('animalSlug', slug);
  }

  setCategoryName(name) {
    this.categoryName = name;
    localStorage.setItem('categoryName', name);
  }

  setCategoryID(id) {
    this.categoryID = id;
    localStorage.setItem('categoryID', id);
  }

  setCategorySlug(slug) {
    this.categorySlug = slug;
    localStorage.setItem('categorySlug', slug);
  }

  setSubcategoryID(id) {
    this.subcategoryID = id;
    localStorage.setItem('subcategoryID', id);
  }

  setProductId(id) {
    this.productId = id;
    // localStorage.setItem('productId', id);
  }

  resetFilter() {
    this.filteredProducts = [];
    this.resetedFilter = true;
    localStorage.setItem('resetFilter', true);
  }

  unResetFilter() {
    this.resetedFilter = false;
    localStorage.setItem('resetFilter', false);
  }

  setFilter() {
    this.filteredProducts = [];
    this.resetedFilter = false;
    localStorage.setItem('resetFilter', false);
  }

  getSubcategory(id) {
    let slug;
    if (id === undefined) {
      const subcategoryID = localStorage.getItem('subcategoryID');
      this.subcategories.map(item => {
        if (Number(item.id) === Number(subcategoryID)) slug = item.slug;
      });
      this.subcategorySlug = slug;
      localStorage.setItem('subcategorySlug', slug);
      return slug;
    } else {
      this.subcategories.map(item => {
        if (Number(item.id) === Number(id)) slug = item.slug;
      });
      this.subcategorySlug = slug;
      localStorage.setItem('subcategorySlug', slug);
      return slug;
    }
  }

  sortProducts(value) {
    if (value === 'cheap')
      this.filteredProducts.sort((a, b) => a.price - b.price);

    if (value === 'expensive')
      this.filteredProducts.sort((a, b) => b.price - a.price);
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

  async getCategories(language, category) {
    this.state = 'pending';
    // console.log(category);
    try {
      const { data } = await fetchCategories(language, category);
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

  async getSubcategories(language) {
    this.state = 'pending';
    try {
      const { data } = await fetchSubcategories(language);
      runInAction(() => {
        this.subcategories = data;
        localStorage.setItem('subcategories', JSON.stringify(data));
        // console.log(this.subcategories);
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
  async getFilteredSubcategories(language, category) {
    this.state = 'pending';
    try {
      const { data } = await fetchFilterSubcategories(language, category);
      runInAction(() => {
        this.filteredSubcategories = data;
        localStorage.setItem('filteredSubcategories', JSON.stringify(data));
        // console.log(this.subcategories);
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async getFilters(category, language) {
    this.filterState = 'pending';
    try {
      const { data } = await fetchFilters(category, language);
      // console.log(data.data);
      runInAction(() => {
        this.filters = data.data;
        this.filterState = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.filterState = 'error';
      });
    }
  }

  async getFilteredProducts(category, language, query) {
    // console.log(category, language, query);
    this.state = 'pending';
    try {
      const { data } = await fetchFilteredProducts(category, language, query);
      // console.log(data.data);
      runInAction(() => {
        this.filteredProducts = data.data;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async getFilteredSaleProducts(category, language, query) {
    // console.log(query);
    this.state = 'pending';
    try {
      const { data } = await fetchSaleNewProducts(category, language, query);

      runInAction(() => {
        this.saleProducts = data.data;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async getFilteredNewProducts(category, language, query) {
    // console.log(query);
    this.state = 'pending';
    try {
      const { data } = await fetchSaleNewProducts(category, language, query);

      runInAction(() => {
        this.newProducts = data.data;
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

  async getProductByID(id, lang) {
    this.state = 'pending';
    try {
      const { data } = await fetchProductByID(id, lang);
      runInAction(() => {
        this.productById = data;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
}
