import { IMAGES } from '@/src/assets/images';
import { Header } from '@/src/components/common/Header';
import { LoginUser } from '@/src/components/screens/auth/login';
import { MainLayout } from '@components/layouts/MainLayout';
export default function Login() {
  return (
    <MainLayout>
      <Header
        extendedHeaderImage={IMAGES.logoFull}
        showLeftIcon={false}
        backgroundImage={IMAGES.header_bg}
      />

      <MainLayout.Body variant="scroll">
        <LoginUser />
      </MainLayout.Body>
    </MainLayout>
  );
}
