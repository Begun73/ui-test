import { Main } from "./components/Main";
import { createStore, StoreContext } from "./store";

const store = createStore();

export const App = (): JSX.Element => {
  return (
    <StoreContext.Provider value={store}>
      <Main></Main>
    </StoreContext.Provider>
  );
};
