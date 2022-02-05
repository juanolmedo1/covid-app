import { StyleSheet } from 'react-native';
import { colors, spacings } from '@utils/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    height: 200,
    justifyContent: 'center',
    alignItems: 'flex-end',
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
  icon: {
    height: 150,
    width: 150,
  },
});
