import { makeAutoObservable, runInAction } from 'mobx';
import { fetchProductByID } from '../services/productsAPI';

export class ComparisonStore {
  state = '';
  compareList = JSON.parse(localStorage.getItem('compareList')) || [];
  compareIDList = JSON.parse(localStorage.getItem('compareIDList')) || [];
  comparisonAmount = Number(localStorage.getItem('comparisonAmount')) || 0;
  animalCategory = localStorage.getItem('animalCategory') || null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setCategory(slug) {
    this.animalCategory = slug;
    this.compareIDList = [];
    this.compareList = [];

    localStorage.removeItem('compareIDList');
    localStorage.removeItem('compareList');
    localStorage.setItem('animalCategory', slug);
  }

  alreadyAddedToCompare(id) {
    if (this.compareList.length === 0) return;
    return this.compareList.some(item => item.id === id);
  }

  addToComparison(product) {
    this.compareList = [...this.compareList, product];
    localStorage.setItem('compareList', JSON.stringify(this.compareList));
    this.comparisonAmount += 1;
    localStorage.setItem('comparisonAmount', this.comparisonAmount);
    this.compareIDList.push(product.id);
    localStorage.setItem('compareIDList', JSON.stringify(this.compareIDList));
  }

  removeFromComparison(id) {
    const index = this.compareList.findIndex(product => product.id === id);
    if (index !== -1) {
      this.compareList.splice(index, 1);
      localStorage.setItem('compareList', JSON.stringify(this.compareList));
      this.comparisonAmount -= 1;
      localStorage.setItem('comparisonAmount', this.comparisonAmount);

      const indexID = this.compareIDList.findIndex(
        productID => productID === id
      );
      if (indexID !== -1) {
        this.compareIDList.splice(index, 1);
        localStorage.setItem(
          'compareIDList',
          JSON.stringify(this.compareIDList)
        );
      }
      if (this.comparisonAmount === 0) {
        this.animalCategory = null;
        this.compareIDList = [];
        this.compareList = [];

        localStorage.removeItem('compareIDList');
        localStorage.removeItem('compareList');
        localStorage.removeItem('animalCategory');
      }
    }
  }

  // addToIDList(id) {
  //   this.compareIDList.push(id);
  //   localStorage.setItem('compareIDList', JSON.stringify(this.compareIDList));
  // }

  // removeFromIdList(id) {

  // }

  async getComparisonProductByID(id, lang) {
    this.state = 'pending';
    this.compareList = [];
    try {
      const { data } = await fetchProductByID(id, lang);
      runInAction(() => {
        this.compareList.push(data);
        localStorage.setItem('compareList', JSON.stringify(this.compareList));
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
}
