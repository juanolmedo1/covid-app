import { colors, fontSizes, inputs, spacings } from '@utils/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: inputs.width,
    margin: 4,
    flexDirection: 'row',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 0.5,
    backgroundColor: colors.gray,
  },
  text: {
    fontSize: fontSizes.XS,
    marginHorizontal: spacings.XXS,
    color: colors.gray,
  },
});
