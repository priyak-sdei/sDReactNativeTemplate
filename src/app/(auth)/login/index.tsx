import { LoginUser } from '@components/modules/auth/login/Login';

import { Header } from '@/src/components/common/Header/Header';
import { MainLayout } from '@components/layouts/MainLayout';

export default function Login() {
  return (
    <MainLayout safeAreaTop={true}>
      <Header
        // backgroundImage={require('../../../assets/images/banner.jpeg')}
        title="Login"
        leftIcon={<></>}
        // safeAreaTop={true}
      />
      <MainLayout.Body variant="fixed">
        <LoginUser />
      </MainLayout.Body>
    </MainLayout>
  );
}
