import { Header } from '@/src/components/common/Header';
import { PasswordForgot } from '@/src/components/screens/auth/forgot-password';
import { MainLayout } from '@components/layouts/MainLayout';
import styles from '../../styles';
export default function ForgotPassword() {
  return (
    <MainLayout>
      <Header
        headerHeight={130}
        showBottomRadius={false}
        customHeaderContainer={styles.transparentHeader}
      />
      <MainLayout.Body variant="scroll">
        <PasswordForgot />
      </MainLayout.Body>
    </MainLayout>
  );
}
