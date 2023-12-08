import { makeAutoObservable, runInAction } from 'mobx';
import { fetchProducts } from '../services/productsAPI';

export class CartStore {
  state = '';
  products = [];
  favProd = {};
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  total = Number(localStorage.getItem('total')) || 0;
  productAmount = Number(localStorage.getItem('productAmount')) || 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addToCart(item) {
    let alreadyExists = false;
    this.cart.forEach(product => {
      if (this.cart.length === 0) alreadyExists = false;
      if (product.id === item.id) {
        alreadyExists = true;
        return;
      }
    });
    if (!alreadyExists) {
      this.cart.push(item);
      this.productAmount += 1;
      item.promotional_price !== 0
        ? (this.total += item.promotional_price)
        : (this.total += item.price);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      localStorage.setItem('total', this.total);
      localStorage.setItem('productAmount', this.productAmount);
    }
  }

  removeFromCart(id) {
    let productIndex;
    let price;
    let amount;
    this.cart.forEach((product, index) => {
      if (product.id === id) {
        productIndex = index;
        amount = product.amount;
        product.promotional_price !== 0
          ? (price = product.promotional_price)
          : (price = product.price);
      }
    });
    this.cart.splice(productIndex, 1);
    this.total -= price * amount;
    this.productAmount -= amount;

    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('total', this.total);
    localStorage.setItem('productAmount', this.productAmount);
  }

  alreadyAdded(id) {
    return this.cart.some(product => product.id === id);
  }

  increaseAmount(id) {
    this.cart.forEach(product => {
      if (product.id === id) {
        product.amount += 1;
        this.productAmount += 1;
        product.promotional_price !== 0
          ? (this.total += product.promotional_price)
          : (this.total += product.price);

        localStorage.setItem('cart', JSON.stringify(this.cart));
        localStorage.setItem('productAmount', this.productAmount);
        localStorage.setItem('total', this.total);
      }
    });
  }
  decreaseAmount(id) {
    this.cart.forEach(product => {
      if (product.id === id) {
        product.amount -= 1;
        this.productAmount -= 1;
        product.promotional_price !== 0
          ? (this.total -= product.promotional_price)
          : (this.total -= product.price);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        localStorage.setItem('productAmount', this.productAmount);
        localStorage.setItem('total', this.total);
      }
    });
  }

  countTotal() {
    const sum = this.cart.reduce((product, acc) => {
      acc + product.quantity;
    }, 0);
    this.total = sum;
    localStorage.setItem('total', sum);
  }

  async getProducts(language) {
    this.state = 'pending';
    try {
      const { data } = await fetchProducts(language);
      runInAction(() => {
        this.products = data;
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  // async getProductByID(id) {
  //   this.state = 'pending';
  //   try {
  //     const { data } = await fetchProductByID(id);
  //     return data;
  //     // runInAction(() => {
  //     //   // this.cartProducts = [...this.cartProducts, data];
  //     //   this.state = 'done';
  //     // });
  //   } catch (error) {
  //     runInAction(() => {
  //       this.state = 'error';
  //     });
  //   }
  // }
}
