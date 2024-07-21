"use client";
import React, { createContext, ReactNode } from "react";
import AppStore from "../store/Store";
// export const RootStore = {
//   appStore: new AppStore(),
// };
export const StoreContext = createContext<any>(null);

export const StoreWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <StoreContext.Provider
      value={{
        store: new AppStore(),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
