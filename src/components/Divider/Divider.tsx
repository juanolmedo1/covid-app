import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export const Divider: FC = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
  );
};
