import { Action, PayloadTypes } from './types';

const createAction = (type: string) => {
  return (payload: PayloadTypes): Action => ({ type, payload });
};

export const SET_COUNTRIES: string = 'SET_COUNTRIES';
export const SET_CONFIRMED_CASES: string = 'SET_CONFIRMED_CASES';
export const SORT_BY: string = 'SORT_BY';
export const SET_AUTH_USER: string = 'SET_AUTH_USER';

export const setCountries = createAction(SET_COUNTRIES);
export const setConfirmedCases = createAction(SET_CONFIRMED_CASES);
export const setSortBy = createAction(SORT_BY);
export const setAuthUser = createAction(SET_AUTH_USER);
