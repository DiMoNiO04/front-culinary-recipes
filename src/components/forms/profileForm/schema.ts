import * as yup from 'yup';
import { EValidateForm } from '@/utils';

const schemaProfile = yup.object().shape({
  firstName: yup.string().required(EValidateForm.REQUIRED_FIELD),
  lastName: yup.string().required(EValidateForm.REQUIRED_FIELD),
  surname: yup.string(),
  email: yup.string().email(EValidateForm.INVALID_EMAIL).required(EValidateForm.REQUIRED_FIELD),
  phone: yup.string().matches(/^[0-9]+$/, EValidateForm.INVALID_PHONE),
  country: yup.string(),
  city: yup.string(),
  dateOfBirth: yup.date().nullable(),
});

export default schemaProfile;
