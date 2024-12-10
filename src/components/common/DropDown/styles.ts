/**
 * Author: Priya Kumari
 * Date: 2024-10-17 12:06:42
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
    container: {
      backgroundColor: colors.white,
      borderRadius: moderateScale(SPACING.xxxxs),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: moderateScale(SPACING.xxs),
      padding: moderateScale(SPACING.xs),
    },
    errorStyle: {
      ...TYPOGRAPHY.error,
      color: colors.red,
      marginTop: -10,
      // color: COLORS.ERROR_RED,
      //...Fonts.medium,
      // fontSize: moderateScale(10),
      // paddingHorizontal: moderateScale(SPACING.xxs),
      // top: -moderateScale(SPACING.xs),
    },
    groupContainer: {
      flexDirection: 'row',
      flex: 0.6,
      justifyContent: 'flex-end',
    },
    header_container: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    headingTitle: {
      color: colors.primary,
      flex: 1,

      fontSize: moderateScale(22),
      marginLeft: moderateScale(15),
      padding: moderateScale(5),
    },

    innerContainer: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    labelStyle: {
      color: colors.primary,
      ...TYPOGRAPHY.textInput,
    },
    listContainer: {
      alignItems: 'center',
      borderBottomWidth: moderateScale(0.7),
      borderColor: colors.placeholder,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: moderateScale(5),
      paddingVertical: moderateScale(10),
    },
    pickerContainer: {
      flex: 1,
      marginTop: moderateScale(20),
    },
    pickerOuterContainer: {
      backgroundColor: colors.primary_bg,
      flex: 1,
      marginTop: moderateScale(20),
      padding: moderateScale(15),
      paddingBottom: moderateScale(20),
    },
    valueStyle: {
      color: colors.secondary,
      flex: 1,
      paddingRight: moderateScale(SPACING.xxxs),
      textAlign: 'right',
      ...TYPOGRAPHY.btnText,
    },
  });
};

export default createStyles;
