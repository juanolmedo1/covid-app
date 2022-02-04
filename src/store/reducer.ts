import { useReducer } from 'react';
import {
  SET_AUTH_USER,
  SET_CONFIRMED_CASES,
  SET_COUNTRIES,
  SORT_BY,
} from './actions';
import { setCasesByCountry, setUser, sort, sortCountries } from './functions';
import {
  Action,
  IAppContext,
  SetAuthUserPayload,
  SetConfirmedCasesPayload,
  SetCountriesPayload,
  SetSortPayload,
} from './types';

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

const reducer = (state = initialState, action: Action): IAppContext => {
  switch (action.type) {
    case SET_COUNTRIES: {
      return {
        ...state,
        countries: sortCountries(action.payload as SetCountriesPayload),
      };
    }

    case SET_CONFIRMED_CASES: {
      return setCasesByCountry(
        state,
        action.payload as SetConfirmedCasesPayload,
      );
    }

    case SORT_BY: {
      return sort(state, action.payload as SetSortPayload);
    }

    case SET_AUTH_USER: {
      return setUser(state, action.payload as SetAuthUserPayload);
    }

    default:
      return state;
  }
};

export default () => useReducer(reducer, initialState);
