/**
 * Author: Priya Kumari
 * Date: 2024-10-16 10:55:17
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { SPACING, moderateScale, verticalScale } from '@theme/index';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';

export const useStyles = ({ colors }: { colors: ExtendedTheme['colors'] }) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      borderRadius: moderateScale(SPACING.s),
      height: verticalScale(55),
      justifyContent: 'center',
      padding: moderateScale(SPACING.s),
    },
    innerContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    leftContainer: {
      alignItems: 'flex-start',
      flex: 1,
      flexDirection: 'row',
    },
    middleContainer: {
      flexDirection: 'row',
      flex: 2,
      justifyContent: 'center',
    },
    rightContainer: {
      alignItems: 'flex-end',
      flex: 1,
    },
    title: {
      ...TYPOGRAPHY.btnText,
      color: colors.white,
    },
  });
};

export default useStyles;
