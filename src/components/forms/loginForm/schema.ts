import * as yup from 'yup';

const REQUIRED_FIELD = 'Required field';

const schemaLogin = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required(REQUIRED_FIELD),
});

export default schemaLogin;
