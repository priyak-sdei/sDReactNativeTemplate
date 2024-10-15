import { LoginUser } from '@components/modules/auth/login/Login';

import { MainLayout } from '@components/layouts/MainLayout';

export default function Login() {
  return (
    <MainLayout showHeader variant="fixed">
      <LoginUser />
    </MainLayout>
  );
}
