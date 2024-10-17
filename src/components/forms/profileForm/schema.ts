import * as yup from 'yup';
import { VALIDATE_FORM } from '@/utils';

const schemaProfile = yup.object().shape({
  fullName: yup.string().required(VALIDATE_FORM.REQUIRED_FIELD),
  email: yup.string().email(VALIDATE_FORM.INVALID_EMAIL).required(VALIDATE_FORM.REQUIRED_FIELD),
});

export default schemaProfile;
