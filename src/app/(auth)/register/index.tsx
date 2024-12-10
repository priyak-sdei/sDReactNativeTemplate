import { IMAGES } from '@/src/assets/images';
import { Header } from '@/src/components/common/Header';
import { RegisterScreen } from '@/src/components/screens/auth/register';
import { moderateScale } from '@/src/theme';
import { MainLayout } from '@components/layouts/MainLayout';

export default function Register() {
  return (
    <MainLayout safeAreaBottom={true} safeAreaTop={false}>
      <Header
        title={'Register'}
        headerHeight={moderateScale(110)}
        showBottomRadius={false}
        backgroundImage={IMAGES.header_bg}
      />
      <MainLayout.Body variant="scroll">
        <RegisterScreen />
      </MainLayout.Body>
    </MainLayout>
  );
}
