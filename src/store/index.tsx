import React, { createContext, FC } from 'react';
import useStoreReducer from './reducer';
import { IAppContext, IAppContextWithDispatch } from './types';

const initialState: IAppContext = {
  countries: [],
  confirmedCases: {},
  sortConfig: {
    key: 'Cases',
    orderCases: 'ASC',
    orderDate: 'ASC',
  },
  auth: null,
};
const store = createContext<IAppContext>(initialState);
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
