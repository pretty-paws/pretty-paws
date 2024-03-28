import { makeAutoObservable, runInAction } from 'mobx';
import { fetchProductByID, fetchProducts } from '../services/productsAPI';

export class CartStore {
  state = '';
  products = [];
  favProd = {};
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartArray = JSON.parse(localStorage.getItem('cartArray')) || [];
  cartArrayData = JSON.parse(localStorage.getItem('cartIDArray')) || [];
  cartIDArray = new Map(this.cartArrayData.map(item => [item[0], item[1]]));
  total = Number(localStorage.getItem('total')) || 0;
  productAmount = Number(localStorage.getItem('productAmount')) || 0;
  orders = JSON.parse(localStorage.getItem('orders')) || [];
  ordersArray = JSON.parse(localStorage.getItem('ordersArray')) || [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getAmount(id) {
    return this.cartIDArray.get(id) || 0;
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
      this.cartArray.push(item.id);
      this.cartIDArray.set(item.id, 1);

      this.productAmount += 1;
      item.promotional_price !== 0
        ? (this.total += item.promotional_price)
        : (this.total += item.price);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      localStorage.setItem('cartArray', JSON.stringify(this.cartArray));
      localStorage.setItem('cartIDArray', JSON.stringify(this.cartIDArray));

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
    amount = this.cartIDArray.get(id) || 0;
    this.productAmount -= amount;
    this.total -= price * amount;

    const index = this.cartArray.findIndex(item => item === id);
    if (index !== -1) this.cartArray.splice(index, 1);

    this.cartIDArray.delete(id);

    localStorage.setItem('cart', JSON.stringify(this.cart));
    localStorage.setItem('cartArray', JSON.stringify(this.cartArray));
    localStorage.setItem('cartIDArray', JSON.stringify(this.cartIDArray));

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

        const currentAmount = this.cartIDArray.get(id) || 0;
        this.cartIDArray.set(id, currentAmount + 1);

        localStorage.setItem('cart', JSON.stringify(this.cart));
        localStorage.setItem('cartIDArray', JSON.stringify(this.cartIDArray));

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

        const currentAmount = this.cartIDArray.get(id) || 0;
        this.cartIDArray.set(id, currentAmount - 1);

        localStorage.setItem('cart', JSON.stringify(this.cart));
        localStorage.setItem('cartIDArray', JSON.stringify(this.cartIDArray));
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

  createOrder(order) {
    this.orders.push(order);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }

  emptyCart() {
    this.cart = [];
    this.total = 0;
    this.productAmount = 0;
    this.cartArray = [];
    this.cartIDArray = [];
    this.cartArrayData = [];
    localStorage.removeItem('cart');
    localStorage.removeItem('cartArray');
    localStorage.removeItem('cartArrayData');
    localStorage.removeItem('cartIDArray');

    localStorage.removeItem('total');
    localStorage.removeItem('productAmount');
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

  async getCartProductByID(id, lang) {
    this.state = 'pending';
    this.cart = [];
    try {
      const { data } = await fetchProductByID(id, lang);
      const product = { ...data, amount: 1 };
      runInAction(() => {
        this.cart.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }

  async getOrderProductByID(id, lang, orderIndex) {
    this.state = 'pending';
    this.ordersArray = [];

    try {
      const { data } = await fetchProductByID(id, lang);
      const { title, short_description } = data;
      const details = this.orders[orderIndex];
      const product = details.cart.find(item => item.id === id);
      const productToUpdate = { ...product, title, short_description };

      runInAction(() => {
        this.ordersArray.push(productToUpdate);
        localStorage.setItem('ordersArray', JSON.stringify(this.ordersArray));
        this.state = 'done';
      });
    } catch (error) {
      runInAction(() => {
        this.state = 'error';
      });
    }
  }
}
