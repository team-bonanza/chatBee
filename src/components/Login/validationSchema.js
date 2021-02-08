import * as yup from 'yup';

const schema=yup.object().shape({
    email:yup
    .string()
    .email('geçerli bir e-mail giriniz')
    .required('e-mail adresi gerekli'),
    password:yup.string().required('şifreni lütfen girer misin!! '),
});

export default schema;