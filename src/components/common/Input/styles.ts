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
    errorBorder: {
      borderColor: colors.error,
      borderWidth: 1,
    },
    errorContainer: {
      borderRadius: moderateScale(5),
      marginVertical: moderateScale(0),
      padding: moderateScale(5),
    },
    errorText: {
      color: colors.error,
      ...TYPOGRAPHY.error,
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
  });
};

export default createStyles;
