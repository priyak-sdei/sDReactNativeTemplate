/**
 * Author: Priya Kumari
 * Date: 2024-10-16 12:40:11
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { SPACING, moderateScale } from '@theme/index';
import { StyleSheet } from 'react-native';

export const createStyles = ({
  colors,
}: {
  colors: ExtendedTheme['colors'];
}) => {
  return StyleSheet.create({
    lgTitle: {
      color: colors.primary,
      fontFamily: 'SEMI_BOLD',
      fontSize: moderateScale(SPACING.l),
    },
    mdTitle: {
      color: colors.primary,
      fontFamily: 'MEDIUM',
      fontSize: moderateScale(SPACING.m),
    },
    smTitle: {
      color: colors.primary,
      fontFamily: 'LIGHT',
      fontSize: moderateScale(SPACING.s),
    },
    xsTitle: {
      color: colors.primary,
      fontFamily: 'REGULAR',
      fontSize: moderateScale(SPACING.xs),
    },
  });
};

export default createStyles;
