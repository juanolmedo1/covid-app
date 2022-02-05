import { StyleSheet } from 'react-native';
import { colors, fontSizes, spacings } from '@utils/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleContainer: {
    height: 200,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: spacings.XXL,
  },
  loginContainer: {
    marginTop: 40,
  },
  forgotContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: spacings.L,
  },
  text: {
    fontSize: fontSizes.XL,
    fontWeight: '600',
    color: colors.white,
  },
});
