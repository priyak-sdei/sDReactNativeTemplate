/**
 * Author: Priya Kumari
 * Date: 2024-10-10 17:23:13
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { SPACING, moderateScale } from '@theme/index';
import { TYPOGRAPHY } from '@theme/typography';
import { DimensionValue, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = (
  { colors }: { colors: ExtendedTheme['colors'] },
  safeAreaTop?: boolean,
  headerHeight?: DimensionValue,
) => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      justifyContent: 'space-between',
      minHeight: moderateScale(60),
      padding: moderateScale(SPACING.xs),
    },
    containerAddOn: {
      height: moderateScale(200),
      paddingTop: safeAreaTop ? insets.top : null,
    },
    containerHeader: {
      backgroundColor: colors.primary,
      borderBottomWidth: StyleSheet.hairlineWidth,
      height: headerHeight,
      paddingHorizontal: moderateScale(SPACING.xs),
      paddingTop: moderateScale(SPACING.xxxxl),
    },

    containerHeaderRound: {
      borderBottomLeftRadius: moderateScale(SPACING.l),
      borderBottomRightRadius: moderateScale(SPACING.l),
    },
    headerTitle: {
      ...TYPOGRAPHY.title,
      color: colors.white,
      flex: 1,
      fontFamily: 'SEMI_BOLD',
      fontSize: moderateScale(24),
    },
    imageStyle: {
      height: moderateScale(30),
      width: moderateScale(30),
    },
    leftContainer: {
      flex: 0.5,
    },

    rightContainer: {
      alignItems: 'flex-end',
      flex: 0.5,
    },
    rowHeader: {
      flexDirection: 'row',
      //flex: 1,
      justifyContent: 'space-between',
      paddingBottom: moderateScale(SPACING.s),
    },
    title: {
      ...TYPOGRAPHY.title,
      color: colors.white,
      flex: 1,
      fontFamily: 'SEMI_BOLD',
      fontSize: moderateScale(24),
      textAlign: 'center',
    },
    titleContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    titleContainerAddOn: {
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },
  });
};

export default useStyles;
