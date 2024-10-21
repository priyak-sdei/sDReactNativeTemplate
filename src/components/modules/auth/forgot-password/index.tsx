import { IMAGES } from '@/src/assets/images';
import { Button } from '@/src/components/common/Button';
import { Input } from '@/src/components/common/Input';
import { Text } from '@/src/components/common/Text';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { Image, View } from 'react-native';
import useLogin from './hooks/useForgotPassword';
import useLoginForm from './hooks/useForgotPasswordForm';
import { useStyles } from './styles';
export function PasswordForgot() {
  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme);
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
        <Image
          source={IMAGES.logoFull}
          style={styles.logoStyle}
          resizeMode="contain"
        />
        <Text level={'mdTitle'} style={styles.forgotTitle}>
          {'Forgot Password'}
        </Text>

        <View style={styles.midSection}>
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
          <Button
            customContainerStyle={styles.customButton}
            title={'Submit'}
            showLoading={false}
            onBtnPress={handleSubmit as () => void}
          />
        </View>
      </View>
    </View>
  );
}
