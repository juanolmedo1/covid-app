import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Country } from '@common-types/index';
import styles from './styles';
import { TextCA } from '@components/TextCA';

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
      <TextCA style={styles.name}>
        {country.Country} <TextCA style={styles.code}>({ISO2})</TextCA>
      </TextCA>
    </TouchableOpacity>
  );
};
