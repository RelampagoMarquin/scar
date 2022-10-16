import * as yup from 'yup';

export const yupCreateUserInput = yup.object().shape({
    
  name: yup.string().required(),
  registration: yup.string().required(),
  email: yup.string().required(),
  class: yup.string().required(),
  password: yup.string().required(),

});