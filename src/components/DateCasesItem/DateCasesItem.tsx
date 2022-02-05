import React, { FC, memo } from 'react';
import { View } from 'react-native';
import format from 'date-fns/format';
import styles from './styles';
import { TextCA } from '@components/TextCA';

type DateCasesItemProps = {
  date: string;
  cases: number;
};

const DateCasesItemFC: FC<DateCasesItemProps> = ({
  date,
  cases,
}): JSX.Element => {
  const formatDate = (value: string): string => {
    return format(new Date(value), 'dd/MM/yyyy');
  };

  return (
    <View style={styles.container}>
      <TextCA style={styles.date}>{formatDate(date)}</TextCA>
      <TextCA style={styles.cases}>{cases}</TextCA>
    </View>
  );
};

export const DateCasesItem = memo(DateCasesItemFC);
