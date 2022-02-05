import React, { useEffect, useContext, useState, FC } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { DateCasesItem, SortIcon } from '@components/index';
import { getCasesByCountry } from '@services/index';
import { store } from '@store/index';
import { setConfirmedCases, setSortBy } from '@store/actions';
import { ConfirmedCasesProps } from '@navigation/index';
import { ConfirmedCases } from '@common-types/index';
import styles from './styles';
import { IAppContextWithDispatch } from '@store/types';
import { TextCA } from '@components/TextCA';

export const ConfirmedCasesFn: FC<ConfirmedCasesProps> = ({
  route,
}): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const { slug, id } = route.params;
  const globalState = useContext(store) as IAppContextWithDispatch;
  const { confirmedCases, sortConfig, dispatch } = globalState;

  useEffect(() => {
    const getCases = async (): Promise<void> => {
      const casesByCountryResponse = await getCasesByCountry(slug);
      dispatch(
        setConfirmedCases({
          countryId: id,
          values: casesByCountryResponse,
        }),
      );
      setLoading(false);
    };
    if (confirmedCases[id] === undefined) {
      setLoading(true);
      getCases();
    } else {
      dispatch(
        setSortBy({ sortKey: sortConfig.key, countryId: id, toggle: false }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const sortByDate = (): void => {
    dispatch(setSortBy({ sortKey: 'Date', countryId: id, toggle: true }));
  };

  const sortByCases = (): void => {
    dispatch(setSortBy({ sortKey: 'Cases', countryId: id, toggle: true }));
  };

  const renderItem = ({ item }: { item: ConfirmedCases }): JSX.Element => {
    return <DateCasesItem date={item.Date} cases={item.Cases} />;
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!confirmedCases[id]?.length) {
    return (
      <View style={styles.container}>
        <TextCA style={styles.title}>We're sorry!</TextCA>
        <TextCA style={styles.subtitle}>
          We don't have information for the selected country.
        </TextCA>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.titlesContainer}>
        <TextCA style={styles.date}>
          Date <SortIcon sort={sortByDate} />
        </TextCA>
        <TextCA style={styles.cases}>
          Cases <SortIcon sort={sortByCases} />
        </TextCA>
      </View>
      <FlatList
        style={styles.list}
        data={confirmedCases[id]}
        initialNumToRender={20}
        renderItem={renderItem}
        keyExtractor={item => item.Date}
      />
    </View>
  );
};
