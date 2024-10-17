import { BottomSheet } from '@/src/components/common/BottomSheet';
import { DropDownSelector } from '@/src/components/common/DropDown/DropDownSelector';
import { Label } from '@/src/components/common/Label/Label';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { IMAGES } from '@assets/images/index';
import { Button } from '@components/common/Button';
import { Input } from '@components/common/Input';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { createStyles } from './Login.styles';
export function LoginUser() {
  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);
  const [termsModal, showTermsModal] = useState(false);

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
      <DropDownSelector label="Select Gender" />

      <Text onPress={() => showTermsModal(true)}>Terms and conditions</Text>

      <Text onPress={() => showTermsModal(true)}>Privacy Policy</Text>

      <BottomSheet visible={termsModal} onDismiss={() => showTermsModal(false)}>
        <Text style={styles.policyTitle}>Awesome 🎉</Text>
        <Text style={styles.policyContent}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </Text>
      </BottomSheet>

      {/* <Text>This is Login In Screen</Text>
      <Link href="/register" style={{}}>
        <ThemedText type="link">Go to Register screen!</ThemedText>
      </Link> */}
    </View>
  );
}
