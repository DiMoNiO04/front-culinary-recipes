import { VALIDATE_FORM } from '@/utils';
import * as Yup from 'yup';

export const schemaChangePassword = Yup.object().shape({
  currentPassword: Yup.string().required(VALIDATE_FORM.REQUIRED_FIELD).min(6, VALIDATE_FORM.MIN_PASSWORD),

  newPassword: Yup.string().required(VALIDATE_FORM.REQUIRED_FIELD).min(6, VALIDATE_FORM.MIN_PASSWORD),

  confirmPassword: Yup.string()
    .required(VALIDATE_FORM.REQUIRED_FIELD)
    .oneOf([Yup.ref('newPassword')], VALIDATE_FORM.PASSWORD_MUTCH),
});
