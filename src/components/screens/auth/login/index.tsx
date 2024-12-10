import { Button } from '@/src/components/common/Button';
import { Input } from '@/src/components/common/Input';
import { Text } from '@/src/components/common/Text';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { router } from 'expo-router';
import { View } from 'react-native';
import useLogin from './hooks/useLogin';
import useLoginForm from './hooks/useLoginForm';
import { useStyles } from './styles';
export function LoginUser() {
  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme);
  const { onLoginSubmit } = useLogin();
  const handleLogin = (values: { email: string; password: string }) => {
    onLoginSubmit(values);
  };
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  } = useLoginForm(handleLogin);

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text level={'lgTitle'}>{'Login'}</Text>

        <View style={styles.inputContainer}>
          <Input
            placeholder="Enter email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            errorText={touched.email && errors.email ? errors.email : ''}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            secureTextEntry
            placeholder="Enter password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            errorText={
              touched.password && errors.password ? errors.password : ''
            }
          />

          <View style={styles.bottomSection}>
            <Button
              disabled={!isValid}
              title={'Login'}
              showLoading={false}
              onBtnPress={isValid && (handleSubmit as () => void)}
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
      </View>
    </View>
  );
}
