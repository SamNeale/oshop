export class ShoppingCartItem {
  title: string;
  imageUrl: string;
  price: number;
  key: string;
  quantity: number;
  category: string;

  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  get totalPrice() {
    return this.price * this.quantity;
  }
}
