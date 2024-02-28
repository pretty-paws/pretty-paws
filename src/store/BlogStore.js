import { makeAutoObservable, runInAction } from 'mobx';
import {
  fetchBlog,
  fetchBlogs,
  fetchCategoriesBlog,
  fetchFilterBlogs,
} from '../services/blogAPI';

export class BlogStore {
  state = '';
  stateCategory = '';
  stateFilterBlog = '';
  nameBlog = '';
  categoryBlog = '';
  blog = [];
  blogs = [];
  linksBlogs = [];
  categories = [];
  filterBlogs = [];
  perPage = 0;
  totalPages = 0;
  prevCategory = '';

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
  async getBlog(nameBlog, language) {
    this.state = 'pending';
    try {
      const { data } = await fetchBlog(nameBlog, language);
      runInAction(() => {
        this.blog = data;
        this.nameBlog = data.title;
        this.categoryBlog = data.category;
        this.state = 'done';
      });
      //   if (data && data.data && Array.isArray(data.data)) {
      //     runInAction(() => {
      //       this.blog = data.data;
      //       this.state = 'done';
      //     });
      //   } else {
      //     console.error('Invalid data format:', data);
      //     runInAction(() => {
      //       this.state = 'error';
      //     });
      //   }
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
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

    const categoriesChanged = category !== this.prevCategory;
    if (categoriesChanged) {
      // Якщо категорії змінилися, перезаписуємо дані FilterBlogs
      this.filterBlogs = [];
      this.prevCategory = category; // Оновлюємо попередні категорії
      page = 1; // Переходимо на першу сторінку при зміні категорій
    }

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
          if (page === 1 || window.innerWidth > 1440) {
            this.filterBlogs = data.data;
          } else {
            this.filterBlogs = [...this.filterBlogs, ...data.data];
          }
          this.totalPages = data.last_page;
          this.linksBlogs = data.links;
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
