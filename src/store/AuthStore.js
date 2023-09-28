import { makeAutoObservable, runInAction } from 'mobx';
import toast from 'react-hot-toast';
import {
  loginUser,
  logOut,
  refreshUser,
  registerUser,
  registerVerify,
  subscribe,
} from '../services/authAPI';

export class AuthStore {
  confirmation_code = 0;
  token = 0;
  user = [];
  userName = localStorage.getItem('userName') || '';
  email = localStorage.getItem('email') || '';
  authorised = JSON.parse(localStorage.getItem('authorised')) || false;
  state = 'pending';
  rememberMe = JSON.parse(localStorage.getItem('rememberMe')) || false;

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
      console.log('sign up data', data);
      runInAction(() => {
        this.confirmation_code = data.data.code;
        this.verifyCode({
          email: this.email,
          confirmation_code: this.confirmation_code,
        });
        this.state = 'done';
      });
    } catch (error) {
      toast.error(error.message, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async verifyCode(email, confirmation_code) {
    this.state = 'pending';
    try {
      const { data } = await registerVerify(email, confirmation_code);
      console.log('verifyCode', data);
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
      localStorage.setItem('token', data.data.token);

      runInAction(() => {
        this.token = data.data.token;
        this.authorised = true;
        this.user = data.data.user;
        this.email = data.data.user.email;
        this.rememberMe === true
          ? localStorage.setItem('email', data.data.user.email)
          : null;
        this.state = 'done';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } catch (error) {
      toast.error(error.response.data.error.email, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async refresh() {
    this.state = 'pending';
    try {
      const res = await refreshUser();
      runInAction(() => {
        this.user = res.data.data.user;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.authorised === false;
        this.state = 'error';
        this.rememberMe === false ? localStorage.removeItem('email') : null;
        this.token === '';
        this.state = 'done';
        localStorage.setItem('authorised', false);
        localStorage.setItem('token', '');
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
      toast.error(error.message, {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      runInAction(() => {
        this.authorised = false;
        this.state = 'error';
      });
    }
  }

  async subscribe(data) {
    this.state = 'pending';
    try {
      await subscribe(data);

      runInAction(() => {
        this.state = 'done';
      });
    } catch (error) {
      toast.error(error.message);
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
}
