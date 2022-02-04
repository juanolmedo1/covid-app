import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Country } from '@common-types/index';
import styles from './styles';

type CountryItemProps = {
  country: Country;
  onPress: () => void;
};

export const CountryItem: FC<CountryItemProps> = ({
  country,
  onPress,
}): JSX.Element => {
  const { ISO2 } = country;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>
        {country.Country} <Text style={styles.code}>({ISO2})</Text>
      </Text>
    </TouchableOpacity>
  );
};
