import { ExtendedTheme } from '@/src/types/ColorPalette';
import {
  SPACING,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@theme/index';
import { StyleSheet } from 'react-native';
export const useStyles = ({ colors }: { colors: ExtendedTheme['colors'] }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(SPACING.xs),
    },
    container_inner: {
      flex: 1,
    },
    logoStyle: {
      alignSelf: 'center',
      height: verticalScale(120),
      marginBottom: '10%',
      marginVertical: moderateScale(SPACING.l),
      width: horizontalScale(150),
    },
    policyContent: {
      fontSize: moderateScale(20),
      paddingTop: moderateScale(40),
    },
    policyTitle: { fontSize: moderateScale(24) },
    signUpText: {
      textAlign: 'center',
      fontFamily: 'MEDIUM',
      textDecorationLine: 'underline',
    },
    bottomSection: {
      justifyContent: 'flex-end',
      flex: 0.3,
    },
    midSection: {
      flex: 0.7,
      justifyContent: 'flex-end',
    },
  });
};

export default useStyles;
