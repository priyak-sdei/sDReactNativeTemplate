import { IMAGES } from '@/src/assets/images';
import { Button } from '@/src/components/common/Button';
import { Input } from '@/src/components/common/Input';
import { Text } from '@/src/components/common/Text';
import { ExtendedTheme } from '@/src/types/ColorPalette';
import { useTheme } from '@react-navigation/native';
import { router } from 'expo-router';
import { View } from 'react-native';
import useRegisterForm from './hooks/useRegisterForm';
import useStyles from './styles';
export function RegisterScreen() {
  const theme = useTheme() as ExtendedTheme;
  const styles = useStyles(theme);

  const handleLogin = (values: { email: string; password: string }) => {};
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useRegisterForm(handleLogin);

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text level={'xlTitle'}>{'Register'}</Text>
        <View style={styles.midSection}>
          <Input
            sourceRightIcon={values.name ? IMAGES.cross_round : null}
            placeholder="Enter name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            errorText={touched.name && errors.name ? errors.name : ''}
            onRightIconPress={() => {
              setFieldValue('name', '');
            }}
          />
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
            placeholder="Enter Password"
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
          <Input
            sourceRightIcon={
              values.confirm_password ? IMAGES.cross_round : null
            }
            placeholder="Enter Confirm Password"
            onChangeText={handleChange('confirm_password')}
            onBlur={handleBlur('confirm_password')}
            value={values.confirm_password}
            errorText={
              touched.confirm_password && errors.confirm_password
                ? errors.confirm_password
                : ''
            }
            onRightIconPress={() => {
              setFieldValue('confirm_password', '');
            }}
          />
        </View>
        <View style={styles.bottomSection}>
          <Button
            title={'Register'}
            showLoading={false}
            onBtnPress={handleSubmit as () => void}
          />
          <Text
            style={styles.signUpText}
            level={'smTitle'}
            onPress={() => {
              router.back();
            }}
          >
            {' Already Registered? Sign In'}
          </Text>
        </View>
      </View>
    </View>
  );
}
