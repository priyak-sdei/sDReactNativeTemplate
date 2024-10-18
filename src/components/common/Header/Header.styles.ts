/**
 * Author: Priya Kumari
 * Date: 2024-10-10 17:23:13
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { SPACING, moderateScale } from '@theme/index';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = (
  { colors }: { colors: ExtendedTheme['colors'] },
  safeAreaTop?: boolean,
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
    leftContainer: {
      flex: 0.5,
    },
    rightContainer: {
      flex: 0.5,
    },
    title: {
      ...TYPOGRAPHY.title,
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
