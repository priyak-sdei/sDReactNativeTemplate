import { router } from 'expo-router';

interface FormValues {
  email: string;
  password: string;
}

const useLogin = () => {
  const login = async (values: FormValues) => {
    router.replace('/(drawer)');
    return false;
  };

  return {
    login,
  };
};

export default useLogin;
