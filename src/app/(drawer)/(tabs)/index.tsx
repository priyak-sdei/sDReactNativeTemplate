import { Header } from '@/src/components/common/Header';
import { HomePage } from '@/src/components/screens/dashboard/home';
import { MainLayout } from '@components/layouts/MainLayout';
export default function HomeScreen() {
  return (
    <MainLayout>
      <Header
        headerHeight={130}
        //  showBottomRadius={false}
        //customHeaderContainer={styles.transparentHeader}
      />

      <MainLayout.Body variant="scroll">
        <HomePage></HomePage>
      </MainLayout.Body>
    </MainLayout>
  );
}
