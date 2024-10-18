import { Header } from '@/src/components/common/Header/Header';
import { MainLayout } from '@components/layouts/MainLayout';

export default function Login() {
  return (
    <MainLayout>
      <Header
        //showLeftIcon={false}
        // backgroundImage={require('../../../assets/images/banner.jpeg')}
        // title="Login"
        headerHeight={'34%'}
        headerTitle={' Reliable , Innovative Solution For Your Business'}
        // leftIcon={<></>}
        // safeAreaTop={true}
      />
      {/* <MainLayout.Body variant="fixed">
        <LoginUser />
      </MainLayout.Body> */}
    </MainLayout>
  );
}
