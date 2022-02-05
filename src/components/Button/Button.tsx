import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type ButtonProps = {
  title: string;
  onPress: () => void;
  type: 'primary' | 'secondary';
};

export const Button: FC<ButtonProps> = ({
  title,
  type,
  onPress,
}): JSX.Element => {
  const containerStyles = {
    primary: styles.containerPrimary,
    secondary: styles.containerSecondary,
  };
  const textStyles = {
    primary: styles.textPrimary,
    secondary: styles.textSecondary,
  };
  const containerStyle = containerStyles[type];
  const textStyle = textStyles[type];
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
