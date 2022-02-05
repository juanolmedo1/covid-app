import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@utils/styles';
import styles from './styles';

type SortIconProps = {
  sort: () => void;
};

export const SortIcon: FC<SortIconProps> = ({ sort }): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={sort}>
      <FontAwesome5 name="sort" size={18} color={colors.white} />
    </TouchableOpacity>
  );
};
