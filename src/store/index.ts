import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

export class Store {
  myHobby: Array<string> = [];
  friendsHobby: Array<String> = [];
  error: string = "";
  message: string = "";
  currentHobby: string = "";
  constructor() {
    makeAutoObservable(this);
  }
  setMessage = (message: string) => {
    this.message = message;
  };
  setError = (err: string) => {
    this.error = err;
  };
  addHobby = (hobby: string) => {
    this.myHobby.push(hobby);
  };
  deleteHobby = (i: number) => {
    this.myHobby.splice(i, 1);
  };
  setModal = (hobby: string) => {
    this.currentHobby = hobby;
  };
}

export const createStore = () => new Store();
export type RootStore = ReturnType<typeof createStore>;
export const StoreContext = createContext<RootStore | null>(null);
export const useStore = (): RootStore => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error(
      "useStore() следует использовать внутри <StoresContext.provider />"
    );
  }
  return store;
};
