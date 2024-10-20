import * as yup from 'yup';
import { VALIDATE_FORM } from '@/utils';

const schemaSignUp = yup.object().shape({
  firstName: yup.string().required(VALIDATE_FORM.REQUIRED_FIELD),
  lastName: yup.string().required(VALIDATE_FORM.REQUIRED_FIELD),
  email: yup.string().email(VALIDATE_FORM.INVALID_EMAIL).required(VALIDATE_FORM.REQUIRED_FIELD),
  password: yup.string().min(6, VALIDATE_FORM.MIN_PASSWORD).required(VALIDATE_FORM.REQUIRED_FIELD),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], VALIDATE_FORM.PASSWORD_MUTCH)
    .required(VALIDATE_FORM.REQUIRED_FIELD),
});

export default schemaSignUp;
