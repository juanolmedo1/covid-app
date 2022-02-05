import { colors, fontSizes, inputs, spacings } from '@utils/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  input: {
    height: inputs.height,
    width: inputs.width,
    borderRadius: inputs.borderRadius,
    borderColor: colors.gray,
    borderWidth: 0.6,
    color: colors.white,
    fontSize: fontSizes.S,
    paddingLeft: spacings.XS,
    marginVertical: spacings.XS,
  },
});
