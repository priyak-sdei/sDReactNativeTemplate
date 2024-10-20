/**
 * Author: Priya Kumari
 * Date: 2024-10-16 15:29:10
 * Description: Stylesheet file created which uses ExtendedTheme interface
 used for light and dark theme colors support
 */

import { ExtendedTheme } from '@/src/types/ColorPalette';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';
import { SPACING, moderateScale } from '../../../theme';

export const createStyles = ({
  colors,
}: {
  colors: ExtendedTheme['colors'];
}) => {
  return StyleSheet.create({
    container: {
      paddingVertical: SPACING.xxxxs,
    },
    hightLightStyle: {
      borderColor: colors.primary,
      borderWidth: moderateScale(1),
    },
    innerContainer: {
      flex: 1,
      paddingHorizontal: moderateScale(SPACING.xxxs),
    },
    inputContainer: {
      backgroundColor: colors.white,
      borderRadius: moderateScale(SPACING.xs),

      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: moderateScale(SPACING.xs),
      width: '100%',
    },
    inputStyle: {
      color: colors.primary,
      ...TYPOGRAPHY.textInput,
    },
    labelContainer: {
      paddingHorizontal: moderateScale(SPACING.xs),
      paddingVertical: moderateScale(5),
    },
    rightIconContainer: {
      justifyContent: 'center',
    },
    rightImage: {
      height: moderateScale(SPACING.m),
      width: moderateScale(SPACING.m),
    },
    title: {
      ...TYPOGRAPHY.title,
    },
    errorText: {
      color: colors.error,
      ...TYPOGRAPHY.error,
    },
    errorContainer: {
      backgroundColor: 'rgba(205,	43,	49,0.1)',
      borderRadius: moderateScale(5),
      padding: moderateScale(10),
      marginVertical: moderateScale(0),
    },
    errorBorder: {
      borderColor: colors.error,
      borderWidth: 1,
    },
  });
};

export default createStyles;
