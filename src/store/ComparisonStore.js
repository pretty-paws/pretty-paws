import { makeAutoObservable } from 'mobx';

export class ComparisonStore {
  state = '';
  compareList = JSON.parse(localStorage.getItem('compareList')) || [];
  comparisonAmount = Number(localStorage.getItem('comparisonAmount')) || 0;
  animalCategory = localStorage.getItem('animalCategory') || null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setCategory(slug) {
    this.animalCategory = slug;
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
  }

  removeFromComparison(id) {
    const index = this.compareList.findIndex(product => product.id === id);
    if (index !== -1) {
      this.compareList.splice(index, 1);
      localStorage.setItem('compareList', JSON.stringify(this.compareList));
      this.comparisonAmount -= 1;
      localStorage.setItem('comparisonAmount', this.comparisonAmount);
      console.log('this.comparisonAmount', this.comparisonAmount);
      if (this.comparisonAmount === 0) this.setCategory(null);
    }
  }
}
