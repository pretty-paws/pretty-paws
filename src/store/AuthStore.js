import { makeAutoObservable, runInAction } from 'mobx';
import {
  loginUser,
  logOut,
  refreshUser,
  registerUser,
  registerVerify,
} from '../services/authAPI';

export class AuthStore {
  confirmation_code = 0;
  token = 0;
  email = localStorage.getItem('email') || '';
  authorised = localStorage.getItem('authorised') || false;
  state = 'pending';
  rememberMe = localStorage.getItem('rememberMe') || false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setEmail(email) {
    this.email = email;
    localStorage.setItem('email', email);
  }

  setRememberMe(bool) {
    this.rememberMe = bool;
    localStorage.setItem('rememberMe', bool);
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
      localStorage.setItem('token', data.data.token);

      runInAction(() => {
        this.token = data.data.token;
        this.authorised = true;
        this.email = data.data.user.email;
        this.rememberMe === true
          ? localStorage.setItem('email', data.data.user.email)
          : null;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async refresh() {
    this.state = 'pending';
    try {
      const res = await refreshUser();
      console.log(res);
      if (res.data.success === false) {
        localStorage.setItem('authorised', false);
        localStorage.setItem('token', '');
      }

      runInAction(() => {
        this.authorised === false;
        this.rememberMe === false ? localStorage.removeItem('email') : null;
        this.token === '';
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
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
        this.state = 'error';
      });
    }
  }
}
