import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('E-posta adresi geçersiz')
    .required('E-posta adresi gerekli'),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'küçük harf kullanınız')
    .matches(/\w*[A-Z]\w*/, 'büyük harf kullanınız')
    .matches(/\d/, 'sayı kullanınız')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'nerede özel karakter?!')
    .min(8, ({min}) => 'en az 8 karakter')
    .required('parola girin'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'parola eşleşmiyor')
    .required('parolayı tekrar gir'),
});
export default schema;
