import { ExtendedTheme } from '@/src/types/ColorPalette';
import { SPACING, horizontalScale, verticalScale } from '@theme/index';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';

export const createStyles = ({
  colors,
}: {
  colors: ExtendedTheme['colors'];
}) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.primary_bg,
      flex: 1,
    },
    innerContainer: {
      marginHorizontal: horizontalScale(SPACING.xs),
      marginVertical: verticalScale(SPACING.xs),
    },
    title: {
      ...TYPOGRAPHY.title,
    },
  });
};

export default createStyles;
