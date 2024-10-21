import { ExtendedTheme } from '@/src/types/ColorPalette';
import { SPACING, horizontalScale, verticalScale } from '@theme/index';
import { TYPOGRAPHY } from '@theme/typography';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useStyles = ({
  colors,
  safeAreaTop,
  safeAreaBottom,
}: {
  colors: ExtendedTheme['colors'];
  safeAreaTop?: boolean;
  safeAreaBottom?: boolean;
}) => {
  const areaInsets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      backgroundColor: colors.primary_bg,
    },
    innerContainer: {
      marginHorizontal: horizontalScale(SPACING.xs),
      marginVertical: verticalScale(SPACING.xs),
    },
    safeAreaContainer: {
      backgroundColor: colors.primary_bg,
      flex: 1,
      paddingBottom: safeAreaBottom ? areaInsets.bottom : 0,
      paddingTop: safeAreaTop ? areaInsets.top : 0,
    },
    title: {
      ...TYPOGRAPHY.title,
    },
  });
};

export default useStyles;
