import * as yup from 'yup';

const schema=yup.object().shape({
    email:yup
    .string()
    .email('geçerli bir e-mail giriniz')
    .required('e-mail adresini gerekli'),
    password:yup
    .string()
.matches(/\w*[a-z]\w*/, 'küçük harf kullanınız')
.matches(/\w*[A-Z]\w*/,'büyük harf kullanınız')
.matches(/\d/,'sayı kullanınız')
.matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'nerede özel karakter?')
.min(8,({min})=> 'en az 8 karakter')
.required('parola giriniz'),
confirmPassword:yup
.string()
.oneOf([yup.ref('password')], 'parola eşleşmiyor')
.required('parolayı tekrar giriniz'),

});
export default schema;