import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  email: string;
}

const useForgotPasswordForm = (onSubmit: (values: FormValues) => void) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    }),
    onSubmit,
  });

  return formik;
};

export default useForgotPasswordForm;
