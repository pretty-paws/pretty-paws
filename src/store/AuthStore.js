import { makeAutoObservable, runInAction } from 'mobx';
import toast from 'react-hot-toast';
import {
  loginUser,
  logOut,
  refreshUser,
  registerUser,
  registerVerify,
  updatePass,
  updateUser,
} from '../services/authAPI';
// import { SubscriptionStore } from './SubscriptionStore';

export class AuthStore {
  confirmation_code = 0;
  token = 0;
  user = [];
  favouritesArray = [];
  userName = localStorage.getItem('userName') || '';
  email = localStorage.getItem('email') || '';
  userSubscriptions = [];
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
    this.favouritesArray = [];
    try {
      const res = await refreshUser();
      // console.log('res', res);
      runInAction(() => {
        this.user = res.data.data.user;
        this.userSubscriptions = res.data.data.user.subscriptions;
        this.state = 'done';
        this.favouritesArray = res.data.data.user.favorites.map(
          product => product.id
        );
        // console.log('favouritesArray', this.favouritesArray);
        // localStorage.setItem(
        //   'fav',
        //   JSON.stringify(res.data.data.user.favorites)
        // );
        localStorage.setItem('favArray', JSON.stringify(this.favouritesArray));
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
