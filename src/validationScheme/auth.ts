import * as yup from 'yup';

export const schemeLogin = yup.object({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required'),
});

export const ShemeRegister = yup.object({
  name: yup.string().required('Name is required'),
  userEmail: yup
    .string()
    .required('Email is required')
    .email('Email is invalid'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
