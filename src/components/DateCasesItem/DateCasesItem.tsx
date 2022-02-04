import React, { FC } from 'react';
import { Text, View } from 'react-native';
import format from 'date-fns/format';
import styles from './styles';

type DateCasesItemProps = {
  date: string;
  cases: number;
};

export const DateCasesItem: FC<DateCasesItemProps> = ({
  date,
  cases,
}): JSX.Element => {
  const formatDate = (value: string): string => {
    return format(new Date(value), 'dd/MM/yyyy');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.cases}>{cases}</Text>
    </View>
  );
};
