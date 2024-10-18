import { Label } from '@/src/components/common/Label/Label';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { IMAGES } from '@assets/images/index';
import { Button } from '@components/common/Button';
import { Input } from '@components/common/Input';
import { useTheme } from '@react-navigation/native';
import { Image, View } from 'react-native';
import createStyles from './styles';
export function RegisterScreen() {
  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Label style={styles.title} level={'smTitle'}>
        {'Welcome to Fitness X'}
      </Label>

      <Image
        source={IMAGES.logoShort}
        style={styles.logoStyle}
        resizeMode="contain"
      />

      <Input
        labelText="Name"
        sourceRightIcon={IMAGES.cross_round}
        textInputContainerStyle={{}}
        placeholder="Enter name"
      />

      <Input
        labelText="E-Mail"
        sourceRightIcon={IMAGES.cross_round}
        textInputContainerStyle={{}}
        placeholder="Enter email"
      />

      <Input
        labelText="Password"
        sourceRightIcon={IMAGES.cross_round}
        secureTextEntry
        textInputContainerStyle={{}}
        placeholder="Enter password"
      />

      <View style={styles.container} />

      <Button
        title={'Sign Up'}
        showLoading={false}
        onBtnPress={() => {
          //Proceed
        }}
      />
    </View>
  );
}
