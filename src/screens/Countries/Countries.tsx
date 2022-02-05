import React, {
  FC,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { CountryItem } from '@components/index';
import { getCountries } from '@services/index';
import { store } from '@store/index';
import { setAuthUser, setCountries } from '@store/actions';
import { Country } from '@common-types/index';
import { CountriesProps } from '@navigation/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '@services/google';
import { colors } from '@utils/styles';
import { IAppContextWithDispatch } from '@store/types';
import styles from './styles';
import { TextCA } from '@components/TextCA';
import { Input } from '@components/Input';

export const Countries: FC<CountriesProps> = ({ navigation }): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const globalState = useContext(store) as IAppContextWithDispatch;
  const { auth, countries, dispatch } = globalState;
  const [countriesArray, setCountriesArray] = useState<Country[]>(countries);

  useEffect(() => {
    const getAllCountries = async (): Promise<void> => {
      const countriesResponse = await getCountries();
      dispatch(setCountries(countriesResponse));
      setCountriesArray(countriesResponse);
      setLoading(false);
    };
    if (!countries.length) {
      setLoading(true);
      getAllCountries();
    }
  }, [dispatch, countries.length]);

  useEffect(() => {
    if (searchValue) {
      const filteredArray: Country[] = countries.filter((country: Country) => {
        return country.Country.toLowerCase().includes(
          searchValue.toLowerCase(),
        );
      });
      setCountriesArray(filteredArray);
    } else {
      setCountriesArray(countries);
    }
  }, [searchValue, countries]);

  const logout = async (): Promise<void> => {
    await signOut();
    dispatch(setAuthUser(null));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <IconMaterialIcons name="logout" size={24} color={colors.white} />
        </TouchableOpacity>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  const navigateToCountryDetails = (
    slug: string,
    country: string,
    id: string,
  ): void => {
    navigation.navigate('ConfirmedCases', { slug, country, id });
  };

  const renderItem = ({ item }: { item: Country }): JSX.Element => {
    return (
      <CountryItem
        country={item}
        onPress={() =>
          navigateToCountryDetails(item.Slug, item.Country, item.ISO2)
        }
      />
    );
  };

  const getItemLayout = (_: any, index: number) => ({
    length: 96,
    index,
    offset: 96 * index,
  });

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextCA style={styles.description}>
        {auth?.user.givenName}, please tap on any country to check COVID-19
        cases per day:
      </TextCA>
      <Input
        style={styles.searchBar}
        placeholder="Search country"
        onChangeText={setSearchValue}
        value={searchValue}
      />
      <FlatList
        style={styles.list}
        data={countriesArray}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        scrollIndicatorInsets={{ right: 1 }}
        keyExtractor={item => item.ISO2}
      />
    </View>
  );
};
