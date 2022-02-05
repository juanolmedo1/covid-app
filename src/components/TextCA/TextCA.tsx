import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import styles from './styles';

export const TextCA: FC<TextProps> = ({ children, ...props }): JSX.Element => {
  return (
    <Text {...props} style={[styles.text, props.style]}>
      {children}
    </Text>
  );
};
