import * as yup from 'yup';

export const yupCreateQuestionTagsInput = yup.object().shape({

    tagId: yup.number().required(),
    questionId: yup.number().required(),

});