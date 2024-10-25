/**
 * Author: Priya Kumari
 * Date: 2024-10-21 16:45:36
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import {
  SPACING,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@theme/index';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';

export const useStyles = ({ colors }: { colors: ExtendedTheme['colors'] }) => {
  return StyleSheet.create({
    container: {
      //backgroundColor: colors.error,
      flex: 1,
      justifyContent: 'center',
      padding: moderateScale(SPACING.xs),
    },
    innerContainer: {
      marginHorizontal: horizontalScale(SPACING.xs),
      marginVertical: verticalScale(SPACING.xs),
    },
    policyContent: {
      fontSize: moderateScale(20),
      paddingTop: moderateScale(40),
    },
    policyTitle: { fontSize: moderateScale(24) },
    title: {
      ...TYPOGRAPHY.title,
    },
  });
};

export default useStyles;
