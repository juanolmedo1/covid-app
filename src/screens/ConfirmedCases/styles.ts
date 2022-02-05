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
    color: colors.green,
    marginLeft: spacings.XXL,
  },
  cases: {
    fontSize: fontSizes.M,
    color: colors.green,
    marginRight: spacings.XXS,
  },
  list: {
    width: '100%',
  },
  title: {
    fontSize: fontSizes.L,
    fontWeight: '500',
    color: colors.white,
    marginBottom: spacings.M,
  },
  subtitle: {
    fontSize: fontSizes.S,
    fontWeight: '300',
    color: colors.white,
    textAlign: 'center',
    marginHorizontal: spacings.M,
  },
});
