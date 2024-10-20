import { VALIDATE_FORM } from '@/utils';
import * as yup from 'yup';

const schemaLogin = yup.object().shape({
  email: yup.string().required(VALIDATE_FORM.REQUIRED_FIELD),
  password: yup.string().required(VALIDATE_FORM.REQUIRED_FIELD),
});

export default schemaLogin;
