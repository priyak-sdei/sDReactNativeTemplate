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
    logoStyle: {
      alignSelf: 'center',
      height: verticalScale(120),
      marginBottom: '10%',
      marginVertical: moderateScale(SPACING.l),
      width: horizontalScale(150),
    },
    midSection: {
      flex: 0.7,
      justifyContent: 'flex-end',
    },
    policyContent: {
      fontSize: moderateScale(20),
      paddingTop: moderateScale(40),
    },
    policyTitle: { fontSize: moderateScale(24) },
    signUpText: {
      fontFamily: 'MEDIUM',
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
  });
};

export default useStyles;
