import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('E-posta adresi geçersiz')
    .required('E-posta adresi gerekli'),
  password: yup.string().required('Tekrar denemende fayda var'),
});

export default schema;
