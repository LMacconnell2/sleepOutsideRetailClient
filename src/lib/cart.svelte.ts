import type { Product } from '../js/types.mts';

class Cart {
  items = $state([] as Product[]);
  addItem(item: Product) {
    this.items.push(item);
  };
  get count() {
    return this.items.length;
  };
}

const cart = new Cart();

export default cart;