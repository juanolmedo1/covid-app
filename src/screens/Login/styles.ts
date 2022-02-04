import { StyleSheet } from 'react-native';
import { backgroundColors, fontSizes, textColors } from '@utils/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fontSizes.XL,
    fontWeight: '600',
    color: textColors.white,
  },
});
