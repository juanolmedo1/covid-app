import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '@utils/styles';

export default StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: colors.blue,
    borderBottomWidth: 0.5,
    borderColor: colors.white,
    marginVertical: spacings.XS,
    marginHorizontal: spacings.L,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: fontSizes.M,
    color: colors.green,
    fontWeight: '600',
  },
  code: {
    fontSize: fontSizes.XS,
    color: colors.white,
    fontWeight: '300',
  },
});
