import { makeAutoObservable, runInAction, toJS } from "mobx";
interface IItem {
  variety: string;
  qty: number;
  image: string;
  price: number;
}
export default class AppStore {
  _cart = [] as IItem[];
  constructor() {
    this._cart = [];
    makeAutoObservable(this);
  }

  addItem(item: IItem) {
    // const cart = [...this._cart, item]
    // console.log("item", item);
    // this._cart = gFilter.push(item)
    // this._cart = gFilter.push(item)
    // this._cart.push(item)
    // console.log(this._cart)
    const duplicateItem = this._cart.findIndex(
      (el) => el.variety === item.variety
    );
    // console.log(duplicateItem);
    if (duplicateItem === -1) {
      this._cart.push(item);
    } else {
      const cart = this._cart.map((el) => {
        if (el.variety === item.variety) {
          // console.log("ggg", el.price + 1);
          return {
            ...el,
            price: el.price * (el.qty + 1),
            qty: el.qty++,
          };
        } else return el;
      });
      this._cart = cart;
    }
  }

  get cart() {
    console.log(toJS(this._cart));
    return this._cart;
  }
}
