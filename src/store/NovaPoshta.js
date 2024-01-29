import { makeAutoObservable, runInAction } from 'mobx';
import {
  fetchCities,
  fetchDistricts,
  fetchWarehouses,
} from '../services/novaPoshtaAPI';

export class NovaPoshta {
  districts = [];
  cities = [];
  cityPages = [];
  warehouses = [];
  NPstate = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setState() {
    this.NPstate = 'done';
  }

  async getDistricts() {
    this.NPstate = 'pending';
    try {
      const { data } = await fetchDistricts();
      runInAction(() => {
        const districts = data.map(district => ({
          ref: district.Ref,
          name: district.Description,
        }));
        this.districts = districts;
        this.warehouses = [];
        // console.log('districts', districts);
        this.NPstate = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.NPstate = 'error';
      });
    }
  }

  async getCities({ areaRef }) {
    // console.log('areaRef', areaRef);
    this.NPstate = 'pending';
    try {
      let allCities = [];

      const firstPage = await fetchCities(areaRef);
      // const totalPages = Math.ceil(firstPage.info.totalCount / 150);
      allCities = [...firstPage.data];

      // if (totalPages > 1) {
      //   const restOfPages = await Promise.all(
      //     Array.from({ length: totalPages - 1 }, (_, index) =>
      //       fetchCities(areaRef, index + 2)
      //     )
      //   );

      //   allCities = allCities.concat(...restOfPages.map(page => page.data));
      // }

      runInAction(() => {
        const cities = allCities.map(city => ({
          ref: city.Ref,
          name: city.Description,
        }));
        this.cities = cities;
        // console.log('cities', cities);
        this.NPstate = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.NPstate = 'error';
      });
    }
  }

  async getWarehouses({ cityRef }) {
    this.NPstate = 'pending';
    try {
      const { data } = await fetchWarehouses(cityRef);
      // console.log('data', data);
      runInAction(() => {
        this.warehouses = data;
        this.NPstate = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.NPstate = 'error';
      });
    }
  }
}
