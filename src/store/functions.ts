import { ConfirmedCases, Country } from '@common-types/index';
import {
  IAppContext,
  OrderKeys,
  SetAuthUserPayload,
  SetConfirmedCasesPayload,
  SetSortPayload,
  SortKeys,
} from './types';

export const toggleOrder = (order: OrderKeys): OrderKeys => {
  return order === 'ASC' ? 'DESC' : 'ASC';
};

export const setCasesByCountry = (
  previousState: IAppContext,
  data: SetConfirmedCasesPayload,
): IAppContext => {
  let newState: IAppContext = {
    ...previousState,
    confirmedCases: {
      ...previousState.confirmedCases,
    },
  };
  let { confirmedCases } = newState;
  const countryId = data.countryId;

  const {
    sortConfig: { key, orderCases, orderDate },
  } = previousState;
  const orderKey = key === 'Cases' ? orderCases : orderDate;
  if (data.values) {
    confirmedCases[countryId] = sortArray(data.values, key, orderKey);
  }

  return newState;
};

export const setUser = (
  previousState: IAppContext,
  data: SetAuthUserPayload,
): IAppContext => {
  return {
    ...previousState,
    auth: data,
  };
};

export const sortCountries = (array: Country[]) => {
  const sortAscending = (itemA: Country, itemB: Country): number => {
    if (itemA.Country === itemB.Country) {
      return 0;
    }
    return itemA.Country > itemB.Country ? 1 : -1;
  };
  return array.sort(sortAscending);
};

export const sortArray = (
  array: ConfirmedCases[],
  sortKey: SortKeys,
  orderKey: OrderKeys,
): ConfirmedCases[] => {
  const sortAscending = (
    itemA: ConfirmedCases,
    itemB: ConfirmedCases,
  ): number => {
    if (itemA[sortKey] === itemB[sortKey]) {
      return 0;
    }
    return itemA[sortKey] > itemB[sortKey] ? 1 : -1;
  };

  const sortDescending = (
    itemA: ConfirmedCases,
    itemB: ConfirmedCases,
  ): number => {
    if (itemA[sortKey] === itemB[sortKey]) {
      return 0;
    }
    return itemA[sortKey] < itemB[sortKey] ? 1 : -1;
  };

  const orderFunction = {
    ASC: sortAscending,
    DESC: sortDescending,
  };

  return array.sort(orderFunction[orderKey]);
};

export const sort = (
  previousState: IAppContext,
  data: SetSortPayload,
): IAppContext => {
  const sortKey = data.sortKey;
  const countryId = data.countryId;
  const toggle = data.toggle;

  let newState: IAppContext = {
    ...previousState,
  };
  let { sortConfig } = newState;
  let orderKey: OrderKeys =
    sortConfig.key === 'Cases' ? sortConfig.orderCases : sortConfig.orderDate;

  if (toggle) {
    if (sortKey === 'Cases') {
      sortConfig.orderCases = toggleOrder(sortConfig.orderCases);
      orderKey = sortConfig.orderCases;
    } else {
      sortConfig.orderDate = toggleOrder(sortConfig.orderDate);
      orderKey = sortConfig.orderDate;
    }
    sortConfig.key = sortKey;
  }

  const countryArray = newState.confirmedCases[countryId];

  newState.confirmedCases[countryId] = sortArray(
    countryArray,
    sortKey,
    orderKey,
  );

  return newState;
};
