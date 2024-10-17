import { Label } from '@/src/components/common/Label/Label';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { IMAGES } from '@assets/images/index';
import { Button } from '@components/common/Button';
import { Input } from '@components/common/Input';
import { useTheme } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { createStyles } from './Login.styles';
export function LoginUser() {
  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi this is me. All good</Text>

      <Image
        source={IMAGES.logoShort}
        style={styles.logoStyle}
        resizeMode="contain"
      />
      <Button
        title={'Login'}
        showLoading={false}
        onBtnPress={() => {}}
      ></Button>
      <Label level={'smTitle'}>{'Welcome to Fitness X'}</Label>
      <Input
        labelText="hkghkgkg"
        sourceRightIcon={IMAGES.cross_round}
        textInputContainerStyle={{}}
        placeholder="Enter email"
      />

      {/* <Text>This is Login In Screen</Text>
      <Link href="/register" style={{}}>
        <ThemedText type="link">Go to Register screen!</ThemedText>
      </Link> */}
    </View>
  );
}
