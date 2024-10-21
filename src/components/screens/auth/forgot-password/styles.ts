import { ExtendedTheme } from '@/src/types/ColorPalette';
import { SPACING, horizontalScale, moderateScale } from '@theme/index';
import { StyleSheet } from 'react-native';
export const useStyles = ({ colors }: { colors: ExtendedTheme['colors'] }) => {
  return StyleSheet.create({
    bottomSection: {
      flex: 0.3,
      justifyContent: 'flex-end',
    },
    container: {
      flex: 1,
      padding: moderateScale(SPACING.xs),
    },
    container_inner: {
      flex: 1,
    },
    customButton: { marginTop: 30 },
    forgotTitle: {
      fontFamily: 'BOLD',
      textAlign: 'center',
    },
    logoStyle: {
      alignSelf: 'center',
      marginBottom: moderateScale(20),
      marginTop: moderateScale(SPACING.l),
      width: horizontalScale(250),
    },
    midSection: {
      flex: 0.7,
      marginTop: moderateScale(20),
    },
  });
};

export default useStyles;
