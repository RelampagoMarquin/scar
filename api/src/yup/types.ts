import * as yup from 'yup';

export const yupCreateTypeInput = yup.object().shape({

  name: yup.string().required(),
  
});