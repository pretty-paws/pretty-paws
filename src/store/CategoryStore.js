import { makeAutoObservable } from 'mobx';

export class CategoryStore {
  constructor() {
    this._subCategories = [
      {
        id: 1,
        title: 'Консерви та паучі',
        description: 'Опис:Консерви та паучі',
        category_id: 1,
      },
      {
        id: 2,
        title: 'Лікувальний корм',
        description: 'Опис:Лікувальний корм',
        category_id: 1,
      },
      {
        id: 3,
        title: 'Замінники котячого молока',
        description: 'Опис:Замінники котячого молока',
        category_id: 1,
      },
      {
        id: 4,
        title: 'Ласощі',
        description: 'Опис:Ласощі',
        category_id: 1,
      },
      {
        id: 5,
        title: 'Сухий корм',
        description: 'Опис:Сухий корм',
        category_id: 1,
      },

      {
        id: 6,
        title: 'Туалети та лотки',
        description: 'Опис:Туалети та лотки',
        category_id: 2,
      },
      {
        id: 7,
        title: 'Наповнювачі для туалетів',
        description: 'Опис:Наповнювачі для туалетів',
        category_id: 2,
      },
      {
        id: 8,
        title: 'Видалення запаху та плям',
        description: 'Опис:Видалення запаху та плям',
        category_id: 2,
      },

      {
        id: 9,
        title: 'Інструменти для очищеня шерсті',
        description: 'Опис:Інструменти для очищеня шерсті',
        category_id: 2,
      },
      {
        id: 10,
        title: 'Пелюшки та підгузники',
        description: 'Опис:Пелюшки та підгузники',
        category_id: 2,
      },
      {
        id: 11,
        title: 'Корекція поведінки (привчателі)',
        description: 'Опис:Корекція поведінки (привчателі)',
        category_id: 2,
      },
      {
        id: 12,
        title: 'Засоби від бліх та кліщів',
        description: 'Опис:Засоби від бліх та кліщів',
        category_id: 3,
      },
      {
        id: 13,
        title: 'Засоби від гельмінтів',
        description: 'Опис:Засоби від гельмінтів',
        category_id: 3,
      },
      {
        id: 14,
        title: 'Вітаміни',
        description: 'Опис:Вітаміни',
        category_id: 3,
      },
      {
        id: 15,
        title: 'Ветеринарні препарати',
        description: 'Опис:Ветеринарні препарати',
        category_id: 3,
      },
      {
        id: 16,
        title: 'Гребінці та щіточки',
        description: 'Опис:Гребінці та щіточки',
        category_id: 4,
      },
      {
        id: 17,
        title: 'Фурмінатори',
        description: 'Опис:Фурмінатори',
        category_id: 4,
      },
      {
        id: 18,
        title: 'Кігтерізи',
        description: 'Опис:Кігтерізи',
        category_id: 4,
      },
      {
        id: 19,
        title: 'Ковтунорізи',
        description: 'Опис:Ковтунорізи',
        category_id: 4,
      },
      {
        id: 20,
        title: 'Ножиці та тримери',
        description: 'Опис:Ножиці та тримери',
        category_id: 4,
      },
      {
        id: 21,
        title: 'Інструменти для виданення кліщів',
        description: 'Опис:Інструменти для виданення кліщів',
        category_id: 4,
      },
      {
        id: 22,
        title: 'Переноски',
        description: 'Опис:Переноски',
        category_id: 5,
      },
      {
        id: 23,
        title: 'Лежачки та спальні місця',
        description: 'Опис:Лежачки та спальні місця',
        category_id: 5,
      },
      {
        id: 24,
        title: 'Іграшки та ігрові комплекси',
        description: 'Опис:Іграшки та ігрові комплекси',
        category_id: 5,
      },
      {
        id: 25,
        title: 'Ковтунорізи',
        description: 'Опис:Ковтунорізи',
        category_id: 5,
      },
      {
        id: 26,
        title: 'Дряпалки та нашийники',
        description: 'Опис:Дряпалки та нашийники',
        category_id: 5,
      },
      {
        id: 27,
        title: 'Шлейки та повідці',
        description: 'Опис:Шлейки та повідці',
        category_id: 5,
      },
      {
        id: 28,
        title: 'Одяг',
        description: 'Опис:Одяг',
        category_id: 5,
      },
      {
        id: 29,
        title: 'Шампуні та товари для купання',
        description: 'Опис:Шампуні та товари для купання',
        category_id: 6,
      },

      {
        id: 30,
        title: 'Догляд за вухами',
        description: 'Опис:Догляд за вухами',
        category_id: 6,
      },
      {
        id: 31,
        title: 'Догляд за вухами',
        description: 'Опис:Догляд за вухами',
        category_id: 6,
      },
      {
        id: 32,
        title: 'Ковтунорізи',
        description: 'Опис:Ковтунорізи',
        category_id: 6,
      },
      {
        id: 33,
        title: 'Догляд за лапами',
        description: 'Опис:Догляд за лапами',
        category_id: 6,
      },
      {
        id: 34,
        title: 'Догляд за ротиком',
        description: 'Опис:Догляд за ротиком',
        category_id: 6,
      },
      {
        id: 34,
        title: 'Догляд за шкірою та шерстю',
        description: 'Опис:Догляд за шкірою та шерстю',
        category_id: 6,
      },
    ];
    this._categories = [
      {
        id: 1,
        title: 'Корм для кішок',
        description: 'Усі корми для котів',
        category_animal_id: 1,
      },
      {
        id: 2,
        title: 'Гігієна для дому',
        description: 'Гігієна для дому',
        category_animal_id: 1,
      },
      {
        id: 3,
        title: 'Здоровя та лікування котиків',
        description: 'Здоровя та лікування котиків',
        category_animal_id: 1,
      },
      {
        id: 4,
        title: 'Інструменти по догляду',
        description: 'Інструменти по догляду',
        category_animal_id: 1,
      },
      {
        id: 5,
        title: 'Подорож та відпочинок',
        description: 'Подорож та відпочинок',
        category_animal_id: 1,
      },
      {
        id: 6,
        title: 'Догляд та гігієна котиків',
        description: 'Догляд та гігієна котиків',
        category_animal_id: 1,
      },
      {
        id: 7,
        title: 'Корм для песиків',
        description: 'Корм для песиків',
        category_animal_id: 0,
      },
      {
        id: 8,
        title: 'Гігієна будинку',
        description: 'Гігієна будинку',
        category_animal_id: 0,
      },
      {
        id: 9,
        title: 'Здоров’я та лікування песиків',
        description: 'Здоров’я та лікування песиків',
        category_animal_id: 0,
      },
      {
        id: 10,
        title: 'Амуніція для песиків',
        description: 'Амуніція для песиків',
        category_animal_id: 0,
      },
      {
        id: 11,
        title: 'Подорож та відпочинок',
        description: 'Подорож та відпочинок',
        category_animal_id: 0,
      },
      {
        id: 12,
        title: 'Догляд та гігієна песиків',
        description: 'Догляд та гігієна песиків',
        category_animal_id: 0,
      },

      {
        id: 13,
        title: 'Корм для гризунів',
        description: 'Корм для гризунів',
        category_animal_id: 2,
      },

      {
        id: 14,
        title: 'Здоров’я та лікування гризунів',
        description: 'Здоров’я та лікування гризунів',
        category_animal_id: 2,
      },
      {
        id: 15,
        title: 'Догляд та гігієна гризунів',
        description: 'Догляд та гігієна гризунів',
        category_animal_id: 2,
      },

      {
        id: 16,
        title: 'Подорож та відпочинок',
        description: 'Подорож та відпочинок',
        category_animal_id: 2,
      },
      {
        id: 17,
        title: 'Клітки та аксесуари',
        description: 'Клітки та аксесуари',
        category_animal_id: 2,
      },
      {
        id: 18,
        title: 'Акваріуми та підставки',
        description: 'Акваріуми та підставки',
        category_animal_id: 3,
      },

      {
        id: 19,
        title: 'Обладнання акваріумів',
        description: 'Обладнання акваріумів',
        category_animal_id: 3,
      },
      {
        id: 20,
        title: 'Грунт та декорації',
        description: 'Грунт та декорації',
        category_animal_id: 3,
      },

      {
        id: 21,
        title: 'Хімія для акваріума',
        description: 'Хімія для акваріума',
        category_animal_id: 3,
      },
      {
        id: 22,
        title: 'Фонтани та ставки',
        description: 'Фонтани та ставки',
        category_animal_id: 3,
      },
    ];

    makeAutoObservable(this);
  }
  setSubCategory(subCategory) {
    this._subCategories = subCategory;
  }

  setCategory(category) {
    this._categories = category;
  }

  get subCategory() {
    return this._subCategories;
  }
  get categores() {
    return this._categories;
  }
}
