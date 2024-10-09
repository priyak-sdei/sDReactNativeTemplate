import { ExtendedTheme } from '@/src/types/ColorPalette';
import { horizontalScale, verticalScale } from '@theme/index';
import { StyleSheet } from 'react-native';

export const createStyles = ({
  colors,
}: {
  colors: ExtendedTheme['colors'];
}) => {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'center',
    },
    logoStyle: {
      alignSelf: 'center',
      backgroundColor: colors.btnColor,
      height: verticalScale(120),
      marginBottom: '10%',
      marginVertical: '10%',
      width: horizontalScale(150),
    },
  });
};

export default createStyles;
