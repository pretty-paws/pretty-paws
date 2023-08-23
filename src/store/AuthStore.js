import { makeAutoObservable, runInAction } from 'mobx';
import {
  loginUser,
  logOut,
  registerUser,
  registerVerify,
} from '../services/authAPI';

export class AuthStore {
  confirmation_code = 0;
  token = 0;
  email = '';
  authorised = false;
  error = false;
  rememberMe = false;

  constructor() {
    this.authorised = localStorage.getItem('authorised') || false;
    this.email = localStorage.getItem('email') || '';
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setEmail(email) {
    this.email = email;
    localStorage.setItem('email', email);
  }

  setRememberMe(bool) {
    this.rememberMe = bool;
  }

  async signUp(userData) {
    try {
      const { data } = await registerUser(userData);
      runInAction(() => {
        this.confirmation_code = data.data.code;
        this.verifyCode({
          email: this.email,
          confirmation_code: this.confirmation_code,
        });
      });
    } catch (error) {
      runInAction(() => {
        this.error = true;
        console.error('Error:', error);
      });
    }
  }

  async verifyCode(email, confirmation_code) {
    try {
      const { data } = await registerVerify(email, confirmation_code);
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('authorised', true);

      runInAction(() => {
        this.user = data.data.user;
        this.token = data.data.token;
        this.authorised = true;
      });
    } catch (error) {
      runInAction(() => {
        this.error = true;
        console.error('Error:', error);
      });
    }
  }

  async logIn(userData) {
    try {
      const { data } = await loginUser(userData);
      localStorage.setItem('authorised', true);
      localStorage.setItem('token', data.data.token);
      runInAction(() => {
        this.token = data.data.token;
        this.authorised = true;
        this.rememberMe === true
          ? localStorage.setItem('email', data.data.user.email)
          : null;
      });
    } catch (error) {
      runInAction(() => {
        this.error = true;
        console.error('Error:', error);
      });
    }
  }

  async logOut() {
    try {
      const res = await logOut();
      console.log(res);
      localStorage.setItem('authorised', false);
      localStorage.removeItem('token');

      runInAction(() => {
        this.token = '';
        this.authorised = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = true;
        console.error('Error:', error);
      });
    } finally {
      if (localStorage.getItem('rememberMe') !== 'true') {
        localStorage.removeItem('email');
        // localStorage.removeItem('rememberMe');
      }
    }
  }
}
