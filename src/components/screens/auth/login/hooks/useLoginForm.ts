import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

const useLoginForm = (onSubmit: (values: FormValues) => void) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: 'priya@yopmail.com',
      password: 'Password@123',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit,
  });

  return formik;
};

export default useLoginForm;
