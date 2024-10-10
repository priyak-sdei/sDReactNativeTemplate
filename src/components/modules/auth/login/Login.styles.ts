import { ExtendedTheme } from '@/src/types/ColorPalette';
import {
  SPACING,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@theme/index';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';
export const createStyles = ({
  colors,
}: {
  colors: ExtendedTheme['colors'];
}) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      flex: 1,
      justifyContent: 'center',
      padding: moderateScale(SPACING.xs),
    },
    innerContainer: {
      marginHorizontal: horizontalScale(SPACING.xs),
      marginVertical: verticalScale(SPACING.xs),
    },
    logoStyle: {
      alignSelf: 'center',

      height: verticalScale(120),
      marginBottom: '10%',
      marginVertical: moderateScale(SPACING.l),
      width: horizontalScale(150),
    },

    title: {
      ...TYPOGRAPHY.title,
    },
  });
};

export default createStyles;
