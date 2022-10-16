import * as yup from 'yup';

export const yupCreateAnswersInput = yup.object().shape({
    
    answer: yup.string().required(),
    best: yup.boolean(),
    avaliation: yup.number().required(),
    questionId: yup.number().required(),
    userId: yup.number().required(),
    
});