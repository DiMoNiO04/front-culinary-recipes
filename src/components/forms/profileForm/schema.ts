import * as yup from 'yup';
import { VALIDATE_FORM } from '@/utils';

const schemaProfile = yup.object().shape({
  firstName: yup.string().required(VALIDATE_FORM.REQUIRED_FIELD),
  lastName: yup.string().required(VALIDATE_FORM.REQUIRED_FIELD),
  surname: yup.string(),
  email: yup.string().email(VALIDATE_FORM.INVALID_EMAIL).required(VALIDATE_FORM.REQUIRED_FIELD),
  phone: yup.string().matches(/^[0-9]+$/, VALIDATE_FORM.INVALID_PHONE),
  country: yup.string(),
  city: yup.string(),
  dateOfBirth: yup.date().nullable(),
});

export default schemaProfile;
