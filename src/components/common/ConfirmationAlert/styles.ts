/**
 * Author: Priya Kumari
 * Date: 2024-10-22 12:06:21
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { SPACING, moderateScale } from '@theme/index';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';

export const createStyles = ({
  colors,
}: {
  colors: ExtendedTheme['colors'];
}) => {
  return StyleSheet.create({
    buttonStyle: { marginTop: moderateScale(SPACING.m) },

    container: {
      alignItems: 'center',
      backgroundColor: colors.primary_bg,
      borderRadius: moderateScale(SPACING.l),
      padding: moderateScale(SPACING.xs),
    },
    logoStyle: {
      height: moderateScale(60),
      width: moderateScale(60),
    },
    sub_title: {
      ...TYPOGRAPHY.sub_title,
      color: colors.subTitleColor,
      marginHorizontal: moderateScale(SPACING.m),
      paddingTop: moderateScale(10),
      textAlign: 'center',
    },
    title: {
      ...TYPOGRAPHY.alertTitle,
    },
    transparentBg: {
      backgroundColor: colors.trans,
    },
  });
};

export default createStyles;
