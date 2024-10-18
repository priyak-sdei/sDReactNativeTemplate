/**
 * Author: Priya Kumari
 * Date: 2024-10-10 17:23:13
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { moderateScale, SPACING } from '@/src/theme';
import { TYPOGRAPHY } from '@/src/theme/typography';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { DimensionValue, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = (
  { colors }: { colors: ExtendedTheme['colors'] },
  headerHeight?: DimensionValue,
) => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    containerHeader: {
      backgroundColor: colors.primary,
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: headerHeight,
      paddingHorizontal: moderateScale(SPACING.xs),
      paddingTop: moderateScale(insets.top),
    },
    containerHeaderRound: {
      borderBottomLeftRadius: moderateScale(SPACING.l),
      borderBottomRightRadius: moderateScale(SPACING.l),
    },
    headerTitle: {
      ...TYPOGRAPHY.headerTitle,
      color: colors.white,
    },
    imageStyle: {
      height: moderateScale(SPACING.xl),
      width: moderateScale(SPACING.xl),
    },
    leftContainer: {
      flex: 0.5,
    },
    rightContainer: {
      alignItems: 'flex-end',
      flex: 0.5,
    },
    logoImage: {
      width: moderateScale(150),
      height: moderateScale(SPACING.xxxl),
    },
    rowHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: moderateScale(SPACING.s),
      alignItems: 'center',
    },
    title: {
      ...TYPOGRAPHY.title,
      color: colors.white,
      flex: 1,
      fontFamily: 'SEMI_BOLD',
      fontSize: moderateScale(SPACING.l),
      textAlign: 'center',
    },

    extendedHeaderStyle: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingVertical: moderateScale(SPACING.s),
      alignItems: 'center',
    },
  });
};

export default useStyles;
