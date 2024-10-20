import { IMAGES } from '@/src/assets/images';
import { Header } from '@/src/components/common/Header';
import { RegisterScreen } from '@/src/components/modules/auth/register';
import { MainLayout } from '@components/layouts/MainLayout';

export default function Register() {
  return (
    <MainLayout safeAreaBottom={true} safeAreaTop={false}>
      <Header
        extendedHeaderImage={IMAGES.logoFull}
        backgroundImage={IMAGES.header_bg}
      />
      <MainLayout.Body variant="scroll">
        <RegisterScreen />
      </MainLayout.Body>
    </MainLayout>
  );
}
