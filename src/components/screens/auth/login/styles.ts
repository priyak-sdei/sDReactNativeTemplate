import { ExtendedTheme } from '@/src/types/ColorPalette';
import { SPACING, moderateScale } from '@theme/index';
import { StyleSheet } from 'react-native';
export const useStyles = ({ colors }: { colors: ExtendedTheme['colors'] }) => {
  return StyleSheet.create({
    bottomSection: {
      marginVertical: moderateScale(SPACING.xl),
    },
    container: {
      flex: 1,
      padding: moderateScale(SPACING.xs),
    },
    container_inner: {
      flex: 1,
      marginTop: moderateScale(SPACING.l),
    },
    inputContainer: {
      flex: 1,
      gap: 10,
      marginVertical: moderateScale(SPACING.m),
    },
    signUpText: {
      fontFamily: 'MEDIUM',
      paddingVertical: moderateScale(SPACING.xs),
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
  });
};

export default useStyles;
