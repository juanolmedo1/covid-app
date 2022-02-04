import { StyleSheet } from 'react-native';
import {
  backgroundColors,
  fontSizes,
  spacings,
  textColors,
} from '@utils/styles';

export default StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: backgroundColors.blue,
    borderBottomWidth: 1,
    borderColor: backgroundColors.white,
    marginVertical: spacings.XS,
    marginHorizontal: spacings.L,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: fontSizes.M,
    color: textColors.green,
    fontWeight: 'bold',
  },
  code: {
    fontSize: fontSizes.XS,
    color: textColors.white,
    fontWeight: '300',
  },
});
