import { User } from '@react-native-google-signin/google-signin';
import { ConfirmedCases, Country } from '@common-types/index';

export type SortKeys = 'Cases' | 'Date';
export type OrderKeys = 'ASC' | 'DESC';

export interface IAppContext {
  countries: Country[];
  confirmedCases: { [key: string]: ConfirmedCases[] };
  sortConfig: {
    key: SortKeys;
    orderCases: OrderKeys;
    orderDate: OrderKeys;
  };
  auth: User | null;
}

export interface IAppContextWithDispatch extends IAppContext {
  dispatch: (action: { type: string; payload: any }) => void;
}

export type SetCountriesPayload = Country[];

export type SetConfirmedCasesPayload = {
  countryId: string;
  values: ConfirmedCases[] | undefined;
};

export type SetSortPayload = {
  sortKey: SortKeys;
  countryId: string;
  toggle: boolean;
};

export type SetAuthUserPayload = User | null;

export type PayloadTypes =
  | SetCountriesPayload
  | SetConfirmedCasesPayload
  | SetSortPayload
  | SetAuthUserPayload;

export type Action = {
  type: string;
  payload: PayloadTypes;
};
