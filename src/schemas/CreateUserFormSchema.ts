import * as Yup from 'yup';

export const CreateUserFormSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 dígitos'),
  password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Senhas não conferem'),
});