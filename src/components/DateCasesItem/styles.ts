import { StyleSheet } from 'react-native';
import { fontSizes, spacings, colors } from '@utils/styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    marginTop: spacings.XXS,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: fontSizes.S,
    color: colors.white,
    fontWeight: '400',
    marginLeft: spacings.XXL,
  },
  cases: {
    fontSize: fontSizes.S,
    color: colors.white,
    fontWeight: 'bold',
    marginRight: spacings.XXL,
  },
});
