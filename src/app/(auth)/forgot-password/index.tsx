import { IMAGES } from '@/src/assets/images';
import { Header } from '@/src/components/common/Header';
import { LoginUser } from '@/src/components/modules/auth/login';
import { MainLayout } from '@components/layouts/MainLayout';
export default function ForgotPassword() {
  return (
    <MainLayout>
      <Header
        extendedHeaderImage={IMAGES.logoFull}
        canGoBack={false}
        showLeftIcon={false}
        backgroundImage={IMAGES.header_bg}
      />

      <MainLayout.Body variant="scroll">
        <LoginUser />
      </MainLayout.Body>
    </MainLayout>
  );
}
