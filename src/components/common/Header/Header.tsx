import { ExtendedTheme } from '@/src/types/ColorPalette';
import { IMAGES } from '@assets/images/index';
import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import type { ReactElement } from 'react';
import type {
  DimensionValue,
  ImageSourcePropType,
  ViewProps,
} from 'react-native';
import { Image, TouchableOpacity, View } from 'react-native';
import { Label } from '../Label/Label';
import useStyles from './Header.styles';

type HeaderProps = {
  sourceLeftImage?: ImageSourcePropType;
  sourceRightImage?: ImageSourcePropType;
  showLeftIcon?: boolean;
  showBottomRadius?: boolean;
  title?: string;
  headerTitle?: string;
  headerHeight?: DimensionValue;
  leftIcon?: ReactElement;
  backgroundImage?: ImageSourcePropType;
  safeAreaTop?: boolean;
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
  headerHeight = '14%',
  backgroundImage,
  safeAreaTop,
  centerComponent,
  rightComponent,
  onLeftPress,
}: HeaderProps) => {
  const router = useRouter();
  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme, safeAreaTop, headerHeight);

  const isLargeHeader = !!backgroundImage;

  return (
    <View
      style={[
        styles.containerHeader,
        showBottomRadius ? styles.containerHeaderRound : {},
      ]}
    >
      <View style={styles.rowHeader}>
        <TouchableOpacity style={styles.leftContainer}>
          {showLeftIcon && sourceLeftImage && (
            <Image source={sourceLeftImage} style={styles.imageStyle} />
          )}
        </TouchableOpacity>
        <Label numberOfLines={1} style={styles.title}>
          {title}
        </Label>
        <TouchableOpacity style={styles.rightContainer}>
          {sourceRightImage && (
            <Image source={sourceRightImage} style={styles.imageStyle} />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          //   backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={IMAGES.logoFull} style={styles.imageStyle} />
        {headerTitle && (
          <Label numberOfLines={2} style={styles.headerTitle}>
            {headerTitle}
          </Label>
        )}
      </View>

      {/* <View
        style={[
          styles.titleContainer,
          isLargeHeader && styles.titleContainerAddOn,
        ]}
      >
        {centerComponent ?? (
          <Label numberOfLines={1} style={styles.title}>
            {title}
          </Label>
        )}
      </View> */}
    </View>
    // <ImageBackground
    //   source={backgroundImage}
    //   style={[styles.container, isLargeHeader && styles.containerAddOn]}
    // >
    //   <Pressable
    //     style={styles.leftContainer}
    //     onPress={onLeftPress ?? router.back}
    //   >
    //     {leftIcon ?? (
    //       <Image source={require('../../../assets/images/back/back.png')} />
    //     )}
    //   </Pressable>
    //   <View
    //     style={[
    //       styles.titleContainer,
    //       isLargeHeader && styles.titleContainerAddOn,
    //     ]}
    //   >
    //     {centerComponent ?? (
    //       <Text numberOfLines={1} style={styles.title}>
    //         {title}
    //       </Text>
    //     )}
    //   </View>
    //   <View style={styles.rightContainer}>{rightComponent}</View>
    // </ImageBackground>
  );
};
