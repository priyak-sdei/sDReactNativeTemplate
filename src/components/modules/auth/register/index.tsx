import { BottomSheet } from '@/src/components/common/BottomSheet';
import { Label } from '@/src/components/common/Label/Label';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { IMAGES } from '@assets/images/index';
import { Button } from '@components/common/Button';
import { Input } from '@components/common/Input';
import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import createStyles from './styles';
export function RegisterScreen() {
  const theme = useTheme() as ExtendedTheme;
  const styles = createStyles(theme);
  const [termsModal, showTermsModal] = useState(false);

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
        title={'Login'}
        showLoading={false}
        onBtnPress={() => {
          //Proceed
        }}
      />

      <Text style={styles.policyContainer} onPress={() => showTermsModal(true)}>
        By continuing you agree to the Privacy Policy and Terms of use.
      </Text>

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
