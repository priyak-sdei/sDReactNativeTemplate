interface FormValues {
  email: string;
  password: string;
}

const useLogin = () => {
  const login = async (values: FormValues) => {
    console.log(values);
    return false;
  };

  return {
    login,
  };
};

export default useLogin;
