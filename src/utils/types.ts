interface ICard {
  id: string;
  title: string;
  image: string;
  price: number;
  available: boolean;
}

export interface IItem {
  variety: string;
  qty: number;
  image: string;
  price: number;
}
