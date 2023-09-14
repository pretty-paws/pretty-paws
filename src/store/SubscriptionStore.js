import { makeAutoObservable } from 'mobx';

export class SubscriptionStore {
  confirmation_code = 0;
  token = 0;
  email = localStorage.getItem('email') || '';
  authorised = localStorage.getItem('authorised') || false;
  state = 'pending';
  rememberMe = localStorage.getItem('rememberMe') || false;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}
