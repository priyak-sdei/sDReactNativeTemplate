import { router } from 'expo-router';

interface FormValues {
  email: string;
  password: string;
}

const useLogin = () => {
  const onLoginSubmit = async (values: FormValues) => {
    router.replace('/(drawer)');
    return false;
  };

  return {
    onLoginSubmit,
  };
};

export default useLogin;
