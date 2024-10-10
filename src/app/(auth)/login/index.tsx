import { LoginUser } from '@components/modules/auth/login/Login';
import { View } from 'react-native';

export default function Login() {
  return (
    <View style={{ flex: 1 }}>
      <LoginUser />
    </View>
  );
}
