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
  errorType = '';
  error = '';
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

  setState() {
    this.state = 'done';
  }

  async signUp(userData) {
    this.state = 'pending';
    try {
      const { data } = await registerUser(userData);
      // console.log('sign up data', data);
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
          // console.log(this.errorType, this.error);
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
        const errorData = error.response.data.error;

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
      console.log('result in login', res);
      runInAction(() => {
        this.user = res.data.data.user;
        this.state = 'done';
      });
    } catch (error) {
      console.log('error in log in', error.response);
      runInAction(() => {
        this.state = 'error';
        this.authorised === false;
        this.rememberMe === false ? localStorage.removeItem('email') : null;
        this.token === '';
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
        localStorage.setItem('authorised', false);
        localStorage.removeItem('token');
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
