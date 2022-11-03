import * as yup from 'yup';

export const yupCreateQuestionInput = yup.object().shape({

    question: yup.string().required(),
    resolved: yup.string(),
    userId: yup.number().required(),

});