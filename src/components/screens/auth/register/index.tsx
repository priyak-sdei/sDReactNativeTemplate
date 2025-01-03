import { Button } from '@/src/components/common/Button';
import { DropDownSelector } from '@/src/components/common/DropDown/DropDownSelector';
import { Input } from '@/src/components/common/Input';
import { SearchDropDown } from '@/src/components/common/SearchDropDown';
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
    isValid,
  } = useRegisterForm(handleLogin);

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text level={'lgTitle'}>{'Register'}</Text>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Enter name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            errorText={touched.name && errors.name ? errors.name : ''}
          />
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
            placeholder="Enter Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            errorText={
              touched.password && errors.password ? errors.password : ''
            }
          />
          <Input
            placeholder="Enter Confirm Password"
            onChangeText={handleChange('confirm_password')}
            onBlur={handleBlur('confirm_password')}
            value={values.confirm_password}
            errorText={
              touched.confirm_password && errors.confirm_password
                ? errors.confirm_password
                : ''
            }
          />
          <DropDownSelector
            label="Select Gender"
            labelField="key"
            options={[
              { key: 'Male', value: '1' },
              { key: 'Female', value: '2' },
            ]}
            onOptionSelect={value => {
              console.log(value);
            }}
          />

          <SearchDropDown
            title={'Register'}
            showLoading={false}
            onBtnPress={isValid && (handleSubmit as () => void)}
          />
          <View style={styles.bottomSection}>
            <Button
              disabled={!isValid}
              title={'Register'}
              showLoading={false}
              onBtnPress={isValid && (handleSubmit as () => void)}
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
      {/* 
        
        <View style={styles.midSection}>
        
        
       
       
        
       
        </View>
       
      </View> */}
    </View>
  );
}
