import { ExtendedTheme } from '@/src/types/ColorPalette';
import { IMAGES } from '@assets/images/index';
import { useTheme } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { createStyles } from './Login.styles';

export function LoginUser() {
  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      <Text>hii</Text>
      <Image
        source={IMAGES.logoShort}
        style={styles.logoStyle}
        resizeMode="contain"
      />

      {/* <Text>This is Login In Screen</Text>
      <Link href="/register" style={{}}>
        <ThemedText type="link">Go to Register screen!</ThemedText>
      </Link> */}
    </View>
  );
}
