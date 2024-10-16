/**
 * Author: Priya Kumari
 * Date: 2024-10-16 15:29:10
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';
import {
  SPACING,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../theme';

export const createStyles = ({
  colors,
}: {
  colors: ExtendedTheme['colors'];
}) => {
  return StyleSheet.create({
    container: {
      padding: moderateScale(SPACING.xs),
    },
    innerContainer: {
      marginHorizontal: horizontalScale(SPACING.xs),
      marginVertical: verticalScale(SPACING.xs),
    },
    inputContainer: {
      alignItems: 'center',
      borderColor: colors.grayBackground,
      borderRadius: moderateScale(10),
      borderWidth: moderateScale(1),
      flexDirection: 'row',
      height: verticalScale(60),
      justifyContent: 'space-between',
      marginVertical: verticalScale(5),
      padding: moderateScale(10),
      width: '90%',
    },
    title: {
      ...TYPOGRAPHY.title,
    },
  });
};

export default createStyles;
