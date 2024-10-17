import { ExtendedTheme } from '@/src/types/ColorPalette';
import {
  SPACING,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@theme/index';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';
export const createStyles = ({
  colors,
}: {
  colors: ExtendedTheme['colors'];
}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(SPACING.xs),
    },

    contentContainer: {
      alignItems: 'center',
      flex: 1,
    },
    innerContainer: {
      marginHorizontal: horizontalScale(SPACING.xs),
      marginVertical: verticalScale(SPACING.xs),
    },
    logoStyle: {
      alignSelf: 'center',

      height: verticalScale(120),
      marginBottom: '10%',
      marginVertical: moderateScale(SPACING.l),
      width: horizontalScale(150),
    },
    policyContainer: {
      padding: SPACING.m,
      textAlign: 'center',
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

export default createStyles;
