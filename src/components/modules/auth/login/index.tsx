import { IMAGES } from '@/src/assets/images';
import { BottomSheet } from '@/src/components/common/BottomSheet';
import { Button } from '@/src/components/common/Button';
import { Input } from '@/src/components/common/Input';
import { Text } from '@/src/components/common/Text';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { router } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import useLogin from './hooks/useLogin';
import useLoginForm from './hooks/useLoginForm';
import { useStyles } from './styles';
export function LoginUser() {
  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme);
  const [termsModal, showTermsModal] = useState(false);
  const { login } = useLogin();
  const handleLogin = (values: { email: string; password: string }) => {
    login(values);
  };
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useLoginForm(handleLogin);

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text level={'xlTitle'}>{'Login'}</Text>

        <View style={styles.midSection}>
          {/* <Image
            source={IMAGES.logoFull}
            style={styles.logoStyle}
            resizeMode="contain"
          /> */}
          <Input
            sourceRightIcon={values.email ? IMAGES.cross_round : null}
            placeholder="Enter email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            errorText={touched.email && errors.email ? errors.email : ''}
            onRightIconPress={() => {
              setFieldValue('email', '');
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            sourceRightIcon={values.password ? IMAGES.cross_round : null}
            secureTextEntry
            placeholder="Enter password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            errorText={
              touched.password && errors.password ? errors.password : ''
            }
            onRightIconPress={() => {
              setFieldValue('password', '');
            }}
          />
        </View>

        <View style={styles.bottomSection}>
          <Button
            title={'Login'}
            showLoading={false}
            onBtnPress={handleSubmit as () => void}
          />
          <Text
            style={styles.signUpText}
            level={'smTitle'}
            onPress={() => {
              router.navigate('/(auth)/register');
            }}
          >
            {' New Here? Sign Up'}
          </Text>
        </View>
      </View>
      <BottomSheet visible={termsModal} onDismiss={() => showTermsModal(false)}>
        <Text style={styles.policyTitle}>Awesome 🎉</Text>
        <Text style={styles.policyContent}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </Text>
      </BottomSheet>
    </View>
  );
}
