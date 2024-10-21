import { colors } from '@/src/theme';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { IMAGES } from '@assets/images/index';
import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import type { ReactElement } from 'react';
import type {
  DimensionValue,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { Text } from '../Text';
import useStyles from './styles';
type HeaderProps = {
  sourceLeftImage?: ImageSourcePropType;
  sourceRightImage?: ImageSourcePropType;
  showLeftIcon?: boolean;
  showBottomRadius?: boolean;
  canGoBack?: boolean;
  title?: string;
  headerTitle?: string;
  headerHeight?: DimensionValue;
  leftIcon?: ReactElement;
  customHeaderContainer?: StyleProp<ViewStyle>;
  extendedHeaderContainer?: StyleProp<ViewStyle>;
  extendedHeaderImage?: ImageSourcePropType;
  extendedHeaderImageStyle?: StyleProp<ImageStyle>;
  backgroundImage?: ImageSourcePropType;
  centerComponent?: ReactElement;
  rightComponent?: ReactElement;
  onLeftPress?: () => void;
} & ViewProps;

export const Header = ({
  sourceLeftImage = IMAGES.left_arrow,
  sourceRightImage,
  showBottomRadius = true,
  showLeftIcon = true,
  title,
  headerTitle,
  headerHeight = 225,
  backgroundImage,
  extendedHeaderContainer = {},
  extendedHeaderImageStyle = {},
  customHeaderContainer = {},
  extendedHeaderImage,
  canGoBack = true,
  onLeftPress,
}: HeaderProps) => {
  const router = useRouter();
  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme, headerHeight);

  return (
    <ImageBackground
      source={backgroundImage}
      imageStyle={[
        showBottomRadius && styles.containerHeaderRound,
        { tintColor: colors.white },
      ]}
      style={[
        styles.containerHeader,
        showBottomRadius && styles.containerHeaderRound,
        customHeaderContainer,
      ]}
    >
      <View style={styles.rowHeader}>
        <TouchableOpacity
          style={styles.leftContainer}
          onPress={() => (canGoBack ? router.back() : onLeftPress())}
        >
          {showLeftIcon && sourceLeftImage && (
            <Image source={sourceLeftImage} style={styles.imageStyle} />
          )}
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <TouchableOpacity style={styles.rightContainer}>
          {sourceRightImage && (
            <Image source={sourceRightImage} style={styles.imageStyle} />
          )}
        </TouchableOpacity>
      </View>
      <View style={[styles.extendedHeaderStyle, extendedHeaderContainer]}>
        {extendedHeaderImage && (
          <Image
            source={extendedHeaderImage}
            style={[styles.logoImage, extendedHeaderImageStyle]}
            resizeMode={'contain'}
          />
        )}

        {headerTitle && (
          <Text numberOfLines={2} style={styles.headerTitle}>
            {headerTitle}
          </Text>
        )}
      </View>
    </ImageBackground>
  );
};
