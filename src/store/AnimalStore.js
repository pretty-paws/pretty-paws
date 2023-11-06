import { makeAutoObservable } from 'mobx';

export class AnimalStore {
  constructor() {
    this._animals = [
      { id: 1, title: 'Собакам' },
      { id: 2, title: 'Котикам' },
      { id: 3, title: 'Гризунам' },
      { id: 4, title: 'Рибам' },
      { id: 5, title: 'Птахам' },
      { id: 6, title: 'Рептиліям' },
    ];
    makeAutoObservable(this);
  }
  setAnimal(animal) {
    this._animals = animal;
  }
  get animal() {
    return this._animals;
  }
}
