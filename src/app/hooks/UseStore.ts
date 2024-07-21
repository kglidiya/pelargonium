import { useContext } from "react";
import { StoreContext } from "../hoc/StoreProvider";

export const useStores = () => {
  return useContext(StoreContext);
};