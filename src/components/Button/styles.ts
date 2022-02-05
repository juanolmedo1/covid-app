import { colors, fontSizes, inputs, spacings } from '@utils/styles';
import { StyleSheet, ViewStyle } from 'react-native';

const baseButton: ViewStyle = {
  width: inputs.width,
  height: inputs.height,
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: spacings.XXS,
};

export default StyleSheet.create({
  containerPrimary: {
    ...baseButton,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 4,
  },
  containerSecondary: {
    ...baseButton,
  },
  textPrimary: {
    fontSize: fontSizes.S,
    color: colors.blue,
  },
  textSecondary: {
    fontSize: fontSizes.S,
    color: colors.white,
  },
});
