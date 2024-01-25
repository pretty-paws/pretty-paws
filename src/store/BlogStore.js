import { makeAutoObservable, runInAction } from 'mobx';
import {
  fetchBlogs,
  fetchCategoriesBlog,
  fetchFilterBlogs,
} from '../services/blogAPI';

export class BlogStore {
  state = '';
  stateCategory = '';
  stateFilterBlog = '';
  blogs = [];
  categories = [];
  filterBlogs = [];
  perPage = 0;
  totalPages = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  //   async getBlogs(language) {
  //     this.state = 'pending';
  //     try {
  //       const { data } = await fetchBlogs(language);
  //       console.log(data);
  //       runInAction(() => {
  //         this.blogs = data;
  //         this.state = 'done';
  //       });
  //     } catch (error) {
  //       runInAction(() => {
  //         this.state = 'error';
  //       });
  //     }
  //   }
  async getCategories(language) {
    this.stateCategory = 'pending';
    try {
      const { data } = await fetchCategoriesBlog(language);
      //   console.log(data.data);
      runInAction(() => {
        this.categories = data;
        this.stateCategory = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.stateCategory = 'error';
      });
    }
  }
  async getBlogs(language) {
    this.state = 'pending';
    try {
      const { data } = await fetchBlogs(language);

      if (data && data.data && Array.isArray(data.data)) {
        runInAction(() => {
          this.blogs = data.data;
          this.state = 'done';
        });
      } else {
        console.error('Invalid data format:', data);
        runInAction(() => {
          this.state = 'error';
        });
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async getFilterBlogs(language, category, perPage, page) {
    this.stateFilterBlog = 'pending';
    try {
      const { data } = await fetchFilterBlogs(
        language,
        category,
        perPage,
        page
      );
      //   console.log(data.data);

      if (data && data.data && Array.isArray(data.data)) {
        runInAction(() => {
          if (page === 1) {
            this.filterBlogs = data.data;
            console.log('data last', data.last_page);
          } else {
            console.log('LLOOOO');
            this.filterBlogs = [...this.filterBlogs, ...data.data];
          }
          console.log('data last', data.last_page);
          console.log('data links', data.links);
          this.totalPages = data.last_page;
          this.stateFilterBlog = 'done';
          //   this.filterBlogs = data.data;
          //   this.stateFilterBlog = 'done';
        });
      } else {
        console.error('Invalid data format:', data);
        runInAction(() => {
          this.stateFilterBlog = 'error';
        });
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      runInAction(() => {
        this.stateFilterBlog = 'error';
      });
    }
  }
}
