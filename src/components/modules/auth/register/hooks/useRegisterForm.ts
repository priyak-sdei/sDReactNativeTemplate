import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  name: string;
  password: string;
  confirm_password: string;
}

const useRegisterForm = (onSubmit: (values: FormValues) => void) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[aA-zZ\s]+$/, 'Name must only contain letters and spaces')
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name can be at most 50 characters'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit,
  });

  return formik;
};

export default useRegisterForm;
