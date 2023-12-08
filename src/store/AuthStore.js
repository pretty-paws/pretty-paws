import { makeAutoObservable, runInAction } from 'mobx';
import toast from 'react-hot-toast';
import {
  loginUser,
  logOut,
  refreshUser,
  registerUser,
  registerVerify,
  subscribe,
  unsubscribe,
  updatePass,
  updateUser,
} from '../services/authAPI';

export class AuthStore {
  confirmation_code = 0;
  token = 0;
  user = [];
  subscriptions = [];
  userName = localStorage.getItem('userName') || '';
  email = localStorage.getItem('email') || '';
  authorised = JSON.parse(localStorage.getItem('authorised')) || false;
  language = localStorage.getItem('language') || 'ua';
  state = 'pending';
  error = '';
  errorType = '';
  rememberMe = JSON.parse(localStorage.getItem('rememberMe')) || false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLanguage(language) {
    this.language = language;
    localStorage.setItem('language', language);
  }

  setEmail(email) {
    this.email = email;
    localStorage.setItem('email', email);
  }

  setRememberMe(bool) {
    this.rememberMe = bool;
    localStorage.setItem('rememberMe', bool);
  }

  setState() {
    this.state = 'done';
  }

  async signUp(userData) {
    this.state = 'pending';
    try {
      const { data } = await registerUser(userData);
      runInAction(() => {
        this.confirmation_code = data.data.code;
        this.verifyCode({
          email: this.email,
          confirmation_code: this.confirmation_code,
        });
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
        const errorData = error.response.data.error;

        if ('email' in errorData) {
          this.errorType = 'email';
          this.error = errorData.email[0];
        }
        if ('phone_number' in errorData) {
          this.errorType = 'phone_number';
          this.error = errorData.phone_number[0];
        }
      });
    }
  }

  async verifyCode(email, confirmation_code) {
    this.state = 'pending';
    try {
      const { data } = await registerVerify(email, confirmation_code);
      runInAction(() => {
        localStorage.setItem('token', data.data.token);
        localStorage.setItem('authorised', true);
        this.user = data.data.user;
        this.token = data.data.token;
        this.authorised = true;
        this.state = 'done';
      });
    } catch (error) {
      toast.error(error.message);
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async logIn(userData) {
    this.state = 'pending';
    try {
      const { data } = await loginUser(userData);
      localStorage.setItem('authorised', true);

      runInAction(() => {
        this.token = data.data.token;
        this.authorised = true;
        this.user = data.data.user;
        this.email = data.data.user.email;
        this.rememberMe === true && this.state !== 'error'
          ? localStorage.setItem('email', data.data.user.email)
          : localStorage.removeItem('email', data.data.user.email);
        this.state = 'done';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
        const errorData = error.response.data?.error;

        if (errorData === undefined) return;

        if ('email' in errorData) {
          this.errorType = 'email';
          this.error = errorData.email[0];
        }
        if ('password' in errorData) {
          this.errorType = 'password';
          this.error = errorData.password[0];
        }
      });
    }
  }

  async refresh() {
    this.state = 'pending';
    try {
      const res = await refreshUser();
      runInAction(() => {
        this.user = res.data.data.user;
        this.subscriptions = res.data.data.user.subscriptions;
        this.state = 'done';
        localStorage.setItem(
          'fav',
          JSON.stringify(res.data.data.user.favorites)
        );
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
        this.authorised = false;
        this.rememberMe === false ? localStorage.removeItem('email') : null;
        this.token = '';
        localStorage.setItem('authorised', false);
        localStorage.setItem('token', '');
        toast.error('Сессія закінчилась. Вам потрібно залогінитись знов.');
      });
    }
  }

  async logOut() {
    this.state = 'pending';
    try {
      await logOut();

      runInAction(() => {
        this.token = '';
        this.authorised = false;
        localStorage.setItem('authorised', false);
        localStorage.removeItem('token');

        if (localStorage.getItem('rememberMe') !== 'true') {
          localStorage.removeItem('email');
        }
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.authorised = false;
        this.state = 'error';
        localStorage.setItem('authorised', false);
        localStorage.removeItem('token');
      });
    }
  }

  async subscribe(data) {
    this.state = 'pending';
    try {
      await subscribe(data);
      // console.log(res.data);

      runInAction(() => {
        this.state = 'done';
        this.authorised === true && this.refresh();
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
        const errorData = error.response.data.error;

        if (errorData === undefined) return;

        if ('email' in errorData) {
          this.errorType = 'email';
          this.error = errorData.email[0];
        }
        if ('category_animal_id' in errorData) {
          this.errorType = 'category_animal_id';
          this.error = errorData.category_animal_id[0];
        }

        if ('category_animal_id' in errorData && 'email' in errorData) {
          this.errorType = 'both';
          this.error = 'Оберіть категорію і введіть Вашу пошту';
        }
      });
    }
  }

  async unSubscribe(data) {
    this.state = 'pending';
    try {
      console.log(data);
      await unsubscribe(data);

      runInAction(() => {
        this.state = 'done';
        this.authorised === true && this.refresh();
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async updateProfile(data) {
    this.state = 'pending';
    try {
      await updateUser(data);
      runInAction(() => {
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
        // const errorData = error.response.data.error;
        // console.log(errorData);
      });
    }
  }

  async updatePassword(data) {
    this.state = 'pending';
    try {
      await updatePass(data);
      // console.log(res);
      runInAction(() => {
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
        this.errorType = 'password-change';
        // const errorData = error.response.data.error;
        // console.log(errorData);
      });
    }
  }
}
