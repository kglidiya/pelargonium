import { IItem } from "./types";

export const getTotal = (arr: IItem[]) => {
  return arr.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
};
