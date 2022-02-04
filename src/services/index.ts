import axios from 'axios';
import { ConfirmedCases, Country } from '@common-types/index';

const BASE_URL = 'https://api.covid19api.com';

export const getCountries = async (): Promise<Country[]> => {
  const response = await axios.get<Country[]>(`${BASE_URL}/countries`);
  return response.data;
};

export const getCasesByCountry = async (
  slug: string,
): Promise<ConfirmedCases[] | undefined> => {
  let response = null;
  try {
    response = await axios.get<ConfirmedCases[]>(
      `${BASE_URL}/total/dayone/country/${slug}/status/confirmed`,
    );
  } catch (error) {
    console.debug(error);
  }
  return response?.data;
};
