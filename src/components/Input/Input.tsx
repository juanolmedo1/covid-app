import React, { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './styles';

export const Input: FC<TextInputProps> = ({ ...props }): JSX.Element => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};
