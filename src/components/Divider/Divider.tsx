import { TextCA } from '@components/TextCA';
import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';

export const Divider: FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <TextCA style={styles.text}>OR</TextCA>
      <View style={styles.line} />
    </View>
  );
};
