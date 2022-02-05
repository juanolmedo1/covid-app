import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '@utils/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlesContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacings.XXS,
  },
  date: {
    fontSize: fontSizes.M,
    fontWeight: '600',
    color: colors.green,
    marginLeft: spacings.XXL,
  },
  cases: {
    fontSize: fontSizes.M,
    fontWeight: '600',
    color: colors.green,
    marginRight: spacings.XXS,
  },
  text: {
    fontSize: fontSizes.XL,
    fontWeight: '600',
  },
  list: {
    width: '100%',
  },
  title: {
    fontSize: fontSizes.L,
    fontWeight: '600',
    color: colors.white,
    marginBottom: spacings.M,
  },
  subtitle: {
    fontSize: fontSizes.S,
    fontWeight: '300',
    color: colors.white,
  },
});
