import { Header } from '@/src/components/common/Header/Header';
import { RegisterScreen } from '@/src/components/modules/auth/register';
import { MainLayout } from '@components/layouts/MainLayout';

export default function Register() {
  return (
    <MainLayout safeAreaBottom={true} safeAreaTop={false}>
      <Header
        backgroundImage={require('../../../assets/images/banner.jpeg')}
        title="Register"
        safeAreaTop={true}
      />
      <MainLayout.Body variant="fixed">
        <RegisterScreen />
      </MainLayout.Body>
    </MainLayout>
  );
}
