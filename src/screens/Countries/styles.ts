import { StyleSheet } from 'react-native';
import { fontSizes, colors, spacings } from '@utils/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  description: {
    color: colors.white,
    marginHorizontal: spacings.M,
    paddingBottom: spacings.S,
    fontSize: fontSizes.S,
    fontWeight: '300',
  },
  logoutButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    marginRight: spacings.XXS,
  },
});
