/**
 * Author: Priya Kumari
 * Date: 2024-10-16 10:55:17
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { SPACING, moderateScale } from '@theme/index';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';

export const useStyles = (
  {
    colors,
  }: {
    colors: ExtendedTheme['colors'];
  },
  disabled: boolean,
) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderRadius: moderateScale(SPACING.xxxxs),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: moderateScale(SPACING.xxs),
      padding: moderateScale(SPACING.xs),
    },
    groupContainer: {
      flexDirection: 'row',
      flex: 0.6,
      justifyContent: 'flex-end',
    },
    innerContainer: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    labelStyle: {
      color: colors.primary,
      ...TYPOGRAPHY.textInput,
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
    valueStyle: {
      color: colors.secondary,
      flex: 1,
      paddingRight: moderateScale(SPACING.xxxs),
      textAlign: 'right',
      ...TYPOGRAPHY.btnText,
    },
  });
};

export default useStyles;
