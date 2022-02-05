import React, { createContext, FC } from 'react';
import useStoreReducer from './reducer';
import { IAppContextWithDispatch } from './types';

const store = createContext({});
const { Provider } = store;

const StoreProvider: FC = ({ children }): JSX.Element => {
  const [state, dispatch] = useStoreReducer();

  return (
    <Provider value={{ ...state, dispatch } as IAppContextWithDispatch}>
      {children}
    </Provider>
  );
};

export { store, StoreProvider };
