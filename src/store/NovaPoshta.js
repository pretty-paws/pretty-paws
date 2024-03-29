import { makeAutoObservable, runInAction } from 'mobx';
import {
  fetchCities,
  fetchDistricts,
  fetchPostomats,
  fetchWarehouses,
} from '../services/novaPoshtaAPI';

export class NovaPoshta {
  districts = [];
  cities = [];
  cityPages = [];
  warehouses = [];
  postomats = [];
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
        this.NPstate = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.NPstate = 'error';
      });
    }
  }

  async getCities({ areaRef }) {
    this.NPstate = 'pending';
    try {
      let allCities = [];

      const firstPage = await fetchCities(areaRef);
      const totalPages = Math.ceil(firstPage.info.totalCount / 150);

      if (totalPages > 1) {
        const restOfPages = await Promise.all(
          Array.from({ length: totalPages - 1 }, (_, index) =>
            fetchCities(areaRef, index + 2)
          )
        );

        allCities = allCities.concat(...restOfPages.map(page => page.data));
      }

      runInAction(() => {
        const cities = allCities.map(city => ({
          ref: city.Ref,
          name: city.Description,
        }));
        this.cities = cities;
        this.NPstate = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.NPstate = 'error';
      });
    }
  }

  async getWarehouses({ cityName }) {
    this.NPstate = 'pending';
    try {
      const { data } = await fetchWarehouses(cityName);
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

  async getPostomats({ cityName }) {
    this.NPstate = 'pending';
    try {
      const { data } = await fetchPostomats(cityName);
      runInAction(() => {
        this.postomats = data;
        this.NPstate = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.NPstate = 'error';
      });
    }
  }
}
