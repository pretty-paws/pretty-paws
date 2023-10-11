import { makeAutoObservable } from 'mobx';

export class AnimalStore {
  constructor() {
    this._animals = [
      { id: 0, title: 'Собакам' },
      { id: 1, title: 'Котикам' },
      { id: 2, title: 'Гризунам' },
      { id: 3, title: 'Рибам' },
      { id: 4, title: 'Птахам' },
      { id: 5, title: 'Рептиліям' },
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
