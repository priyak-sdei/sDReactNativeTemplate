import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import type { ReactElement } from 'react';
import type { ImageSourcePropType, ViewProps } from 'react-native';
import { Image, ImageBackground, Pressable, Text, View } from 'react-native';
import useStyles from './Header.styles';

type HeaderProps = {
  title?: string;
  leftIcon?: ReactElement;
  backgroundImage?: ImageSourcePropType;
  safeAreaTop?: boolean;
  centerComponent?: ReactElement;
  rightComponent?: ReactElement;
  onLeftPress?: () => void;
} & ViewProps;

export const Header = ({
  title,
  leftIcon,
  backgroundImage,
  safeAreaTop,
  centerComponent,
  rightComponent,
  onLeftPress,
}: HeaderProps) => {
  const router = useRouter();
  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme, safeAreaTop);

  return (
    <ImageBackground
      source={backgroundImage}
      style={[styles.container, backgroundImage && styles.imageContainer]}
    >
      <Pressable
        style={styles.leftContainer}
        onPress={onLeftPress ?? router.back}
      >
        {leftIcon ?? (
          <Image source={require('../../../assets/images/back/back.png')} />
        )}
      </Pressable>
      <View style={styles.centerContainer}>
        {centerComponent ?? (
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        )}
      </View>
      <View style={styles.rightContainer}>{rightComponent}</View>
    </ImageBackground>
  );
};
