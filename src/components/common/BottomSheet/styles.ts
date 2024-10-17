/**
 * Author: Priya Kumari
 * Date: 2024-10-10 17:23:13
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { moderateScale } from '@/src/theme';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

export const createStyles = (
  {
    colors,
  }: {
    colors: ExtendedTheme['colors'];
  },
  { insets }: { insets: EdgeInsets },
) => {
  return StyleSheet.create({
    container: {},
    contentContainer: {
      alignItems: 'center',
      backgroundColor: colors.white,
      flex: 1,
      paddingBottom: insets.bottom,
      paddingHorizontal: moderateScale(20),
    },
    title: {
      ...TYPOGRAPHY.title,
    },
  });
};

export default createStyles;
