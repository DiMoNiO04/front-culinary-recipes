import * as yup from 'yup';

const REQUIRED_FIELD = 'Required field';

const schemaSignUp = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^[A-Z]/, 'The first letter must be capitalized')
    .required(REQUIRED_FIELD),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters long').required(REQUIRED_FIELD),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(REQUIRED_FIELD),
});

export default schemaSignUp;
