import React, { FC, useContext, useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, FlatList, Text } from 'react-native';
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

export const Countries: FC<CountriesProps> = ({ navigation }): JSX.Element => {
  const globalState = useContext(store) as IAppContextWithDispatch;
  const { auth, countries, dispatch } = globalState;

  useEffect(() => {
    const getAllCountries = async (): Promise<void> => {
      const countriesResponse = await getCountries();
      dispatch(setCountries(countriesResponse));
    };
    if (!countries.length) {
      getAllCountries();
    }
  }, [dispatch, countries.length]);

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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.description}>
        {auth?.user.givenName}, please tap on any country to check COVID-19
        cases per day:
      </Text>
      <FlatList
        style={styles.list}
        data={countries}
        initialNumToRender={20}
        renderItem={renderItem}
        keyExtractor={item => item.ISO2}
      />
    </SafeAreaView>
  );
};